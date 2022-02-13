import { LoggerService } from './../service/logger.service';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appSpy]',
})
export class SpyDirective {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loggerService.log('SpyDirective');
    this.loggerService.warn('SpyDirective');
    this.loggerService.info('SpyDirective');
  }
}
