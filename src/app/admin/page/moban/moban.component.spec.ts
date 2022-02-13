/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MobanComponent } from './moban.component';

describe('MobanComponent', () => {
  let component: MobanComponent;
  let fixture: ComponentFixture<MobanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
