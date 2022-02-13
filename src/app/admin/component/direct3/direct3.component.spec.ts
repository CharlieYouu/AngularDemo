/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Direct3Component } from './direct3.component';

describe('Direct3Component', () => {
  let component: Direct3Component;
  let fixture: ComponentFixture<Direct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Direct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Direct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
