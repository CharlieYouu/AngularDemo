import { Directive, ElementRef } from "@angular/core";
import { LoggerService } from "@service/logger.service";

@Directive({
  selector: "[log]",
})
export class LogDirective {
  constructor(
    private loggerService: LoggerService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loggerService.log("direct log1");

    (
      this.elementRef.nativeElement.firstChild as HTMLElement
    ).style.backgroundColor = "skyblue";
  }
}
