import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
    constructor(private readonly _configService: ConfigService) {
        super({ header: 'X-API-KEY', prefix: '' }, true);
    }

    async validate(incomingApiKey: string): Promise<boolean> {
        const configApiKey = this._configService.get('apiKey');

        if (configApiKey === incomingApiKey) {
            return true;
        }

        throw new UnauthorizedException();
    }
}
