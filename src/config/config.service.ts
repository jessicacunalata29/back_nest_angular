import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envconfig: { [key: string]: string };

  constructor() {
    const env = process.env.NODE_ENV || 'development';
    const envFilePath = `${__dirname}/../../../.env.${env}`;
    const existsPath = fs.existsSync(envFilePath);

    if (!existsPath) {
      console.log(`El archivo .env.${env} no existe`);
      process.exit(1); // salir con código de error
    }

    this.envconfig = parse(fs.readFileSync(envFilePath, { encoding: 'utf8' }));
  }

  get(key: string): string | undefined {
    return this.envconfig[key];
  }
}
