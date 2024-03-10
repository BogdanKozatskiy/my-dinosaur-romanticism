import {Injectable} from '@nestjs/common';
import {Post} from "./types";
import {faker} from '@faker-js/faker';

@Injectable()
export class AppService {
  async getPost(): Promise<Post> {
    return {
      description: this.getDescription()
    };
  }

  private getDescription(): string {
    return `${faker.animal[faker.animal.type()]()} dinosaur in ${faker.location.city()}`;
  }
}
