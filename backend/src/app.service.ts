import { Injectable } from '@nestjs/common';
import { clerkClient, ClerkClient } from '@clerk/clerk-sdk-node';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return clerkClient.users.getUserList();
  }
}
