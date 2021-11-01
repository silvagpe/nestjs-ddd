import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import "reflect-metadata";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { createConnection } from "typeorm";

async function bootstrap() {

  createConnection()
    .then(async connection => {
      console.log(`Database connection status: ${connection.isConnected}`);
    })
    .catch(error => console.log(error));

  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Poc exemple')
    .setDescription('The API description ')
    .setVersion('1.0')
    .addTag('poc')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
