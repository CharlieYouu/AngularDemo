import { Directive, ElementRef } from "@angular/core";
import { LoggerService } from "@service/logger.service";

@Directive({
  selector: "[log]",
})
export class LogDirective {
  constructor(private loggerService: LoggerService, elementRef: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loggerService.log("log1");
    this.loggerService.warn("log2");
    this.loggerService.info("log3");
  }
}
