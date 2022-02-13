import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-direct-page",
  templateUrl: "./direct-page.component.html",
  styleUrls: ["./direct-page.component.less"],
})
export class DirectPageComponent implements OnInit {
  public isSpecial = true;
  public color = "red";

  public isDom = null;
  public data = ["list1", "list2", "list3"];
  public switch = "2";

  constructor() {}

  ngOnInit() {}
}
