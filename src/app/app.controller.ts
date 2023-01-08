import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('app')
export class AppController {
  @Get()
  home(): string {
    return `Welcome to my movie API`;
  }
}
