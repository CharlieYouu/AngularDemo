import { Component, OnInit } from "@angular/core";
import { BaseService } from "@service/base.service";

@Component({
  selector: "app-service-page",
  templateUrl: "./service-page.component.html",
  styleUrls: ["./service-page.component.less"],
})
export class ServicePageComponent implements OnInit {
  public inputValue!: string;

  constructor(private baseService: BaseService) {}

  ngOnInit() {}

  onClick() {
    this.baseService.setData(this.inputValue);
    alert("success");
  }
}
