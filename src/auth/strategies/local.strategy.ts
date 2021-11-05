import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserRepository } from 'src/infrastructure/repositories/user-repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userRepository.login(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
