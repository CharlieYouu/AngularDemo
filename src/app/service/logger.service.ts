import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  name: string = 'hello';
  constructor() {}

  log(msg: string) {
    console.log(msg);
  }
  warn(msg: string) {
    console.warn(msg);
  }
  info(msg: string) {
    console.info(msg);
  }
}
