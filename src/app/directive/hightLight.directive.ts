import { MissionService } from './../service/mission.service';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightLight]',
})
export class HightLightDirective {
  @Input() isHighLight?: boolean;

  @HostListener('mouseenter') onMouseEnter() {
    this.doHightLight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.doHightLight('');
  }

  constructor(
    private elementRef: ElementRef,
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(
      'this.elementRef.nativeElement.style.backgroundColor',
      this.elementRef
    );
  }
  doHightLight(color: string) {
    this.missionService.missionAnnoucedSource.next(color);
    this.elementRef.nativeElement.style.color = color;
  }
}
