import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { IAuthService } from 'src/domain/contracts/services/iauth.service';

@Injectable()
export class ApiKeyStrategy2 extends PassportStrategy(HeaderAPIKeyStrategy) {
    constructor(private authService: IAuthService) {
        super({ header: 'apiKey', prefix: '' }, true, (apikey, done,) => {
            console.log("apikey", apikey)
            const checkKey = authService.validateApiKey(apikey);
            console.log("checkKey", checkKey)
            if (!checkKey) {
                return done(false);
            }
            return done(true);
        });
    }
}

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
    constructor(private authService: IAuthService) {
        super({ header: 'apiKey', prefix: '' }, false);
    }

    async validate(apikey, done) {
        console.log("apikey", apikey)
        const checkKey = await this.authService.validateApiKey(apikey);
        console.log("checkKey", checkKey)
        if (!checkKey) {
            return done(null, false);
        }
        return done(null, apikey);
    }
}