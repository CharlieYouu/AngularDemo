import { LogDirective } from "./log.directive";
import { NgModule } from "@angular/core";
import { SpyDirective } from "./spy.directive";
import { HightLightDirective } from "./hightLight.directive";

@NgModule({
  declarations: [SpyDirective, HightLightDirective, LogDirective],
  exports: [SpyDirective, HightLightDirective, LogDirective],
})
export class DirectiveModule {}
