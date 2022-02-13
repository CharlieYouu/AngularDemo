/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Direct2Component } from './direct2.component';

describe('Direct2Component', () => {
  let component: Direct2Component;
  let fixture: ComponentFixture<Direct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Direct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Direct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
