import {Controller, Get} from '@nestjs/common';

import {AppService} from './app.service';
import {Post} from "./types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/post')
  async getPost(): Promise<Post> {
    return await this.appService.getPost();
  }
}
