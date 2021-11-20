import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from 'src/domain/contracts/repositories/iuser-repository';
import { IAuthService } from 'src/domain/contracts/services/iauth.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) { }


  private apiKeys: string[] = [
    'ca03na188ame03u1d78620de67282882a84',
    'd2e621a6646a4211768cd68e26f21228a81',
  ];

  validateApiKey(apikey: string): Promise<string> {
    return Promise.resolve(this.apiKeys.find(apiK => apikey === apiK));
  }

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
