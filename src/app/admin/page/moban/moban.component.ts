import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moban',
  templateUrl: './moban.component.html',
  styleUrls: ['./moban.component.less'],
})
export class MobanComponent implements OnInit {
  public currentCustomer = 'Maria';
  constructor() {}

  public peopleInfo = {
    username: 'charlie',
    userpwd: '',
  };

  public doClear() {
    this.peopleInfo = {
      username: '',
      userpwd: '',
    };
  }

  public doLogin() {
    console.log('peopleInfo', this.peopleInfo);
  }

  public inputChange(value: any) {
    console.log('inputChange', this.peopleInfo.username);
  }

  public getText() {
    return 'hello angular';
  }

  public doClick(mouseEvent: Event) {
    console.log('MouseEvent', mouseEvent);
    alert('hello world');
  }

  public doAsync() {
    console.log('同步执行1');
    console.log('同步执行2');
  }

  public doUnAsync1() {
    setTimeout(() => {
      console.log('异步执行1');
    }, 3000);
    console.log('异步执行2');
  }

  public getPromise() {
    return new Promise<void>((resolve, reject) => {});
  }

  public async doUnAsync2() {
    await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        console.log('异步执行1');
        resolve('异步执行成功');
      }, 3000);
    });
  }

  ngOnInit() {}
}
