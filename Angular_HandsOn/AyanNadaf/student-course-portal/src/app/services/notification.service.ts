import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  send(message: string): void {
    console.log(message);
  }
}
