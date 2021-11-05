import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from 'src/domain/contracts/repositories/iuser-repository';
import { IAuthService } from 'src/domain/contracts/services/iauth.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.login(email, password);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    
    const payload = { username: user.email, userId: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
