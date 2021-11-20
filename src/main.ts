import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import "reflect-metadata";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { createConnection } from "typeorm";
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

async function bootstrap() {

  createConnection()
    .then(async connection => {
      console.log(`Database connection status: ${connection.isConnected}`);
      
      const connectionOptions:PostgresConnectionOptions = connection.options as PostgresConnectionOptions;
      if (connectionOptions){        
        console.log(`Database connection host: ${connectionOptions.host}`);
        console.log(`Database connection name: ${connectionOptions.database}`);
      }
      
      
    })
    .catch(error => console.log("createConnection",error));

  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Poc example')
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
