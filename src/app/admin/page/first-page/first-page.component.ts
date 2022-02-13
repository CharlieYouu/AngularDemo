import { MissionService } from './../../../service/mission.service';
import { Attribute, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less'],
})
export class FirstPageComponent implements OnInit {
  missionSubscription?: Subscription;
  constructor(
    @Attribute('isPhone') public isPhone: boolean,
    private missionService: MissionService
  ) {}

  callPhone(value: any) {
    console.log('phone', value);
  }

  getValue(inputEvent: Event) {
    console.log('inputEvent', inputEvent);
    console.log('inputEvent', (inputEvent.target as HTMLInputElement).value);
  }

  ngOnInit() {
    this.missionSubscription = this.missionService.missionAnnouced$.subscribe(
      (color: string) => {
        console.log('color', color);
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.missionSubscription?.unsubscribe();
  }
}
