import { Directive, ElementRef, HostListener } from "@angular/core";
import { LoggerService } from "@service/logger.service";

@Directive({
  selector: "[log]",
})
export class LogDirective {
  constructor(
    private loggerService: LoggerService,
    private elementRef: ElementRef
  ) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("blue");
  }

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    // alert("keydown");
    console.log("keydown");
  }

  highlight(color: string) {
    (
      this.elementRef.nativeElement.firstChild as HTMLElement
    ).style.backgroundColor = color;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loggerService.log("direct log1");

    (
      this.elementRef.nativeElement.firstChild as HTMLElement
    ).style.backgroundColor = "skyblue";
  }
}
