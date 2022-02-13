import { LoggerService } from "./service/logger.service";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  public title = "hello-angular";
  public item = "item";

  public listData = [
    "first-page",
    "second-page",
    "third-page",
    "moban-page",
    "direct-page",
  ];

  constructor(private loggerService: LoggerService, private router: Router) {}

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loggerService.log("AppComponent ngOnInit");
  }

  doLoad(rounte: string) {
    this.router.navigate(["/" + rounte]);
  }

  ngOnDestroy(): void {}
}
