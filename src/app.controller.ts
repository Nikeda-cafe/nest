import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    const date = new Date();
    const nowYear = date.getFullYear();
    const baseYear = 2022;
    const years: string[] = [];
    const diff = nowYear - baseYear;
    for (let i = 0; i <= diff; i++) {
      years.push(String(date.getFullYear() - i));
    }
    console.log(years);
    return {
      title: 'Nest App',
      header: 'Nest Header',
      message: 'Hello Nest',
      years: years,
    };
  }
}
