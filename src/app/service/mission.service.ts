import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  missionAnnoucedSource = new Subject<string>();
  missionAnnouced$ = this.missionAnnoucedSource.asObservable();

  constructor() {}
}
