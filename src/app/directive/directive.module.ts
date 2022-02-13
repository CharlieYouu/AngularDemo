import { NgModule } from '@angular/core';
import { SpyDirective } from './spy.directive';
import { HightLightDirective } from './hightLight.directive';

@NgModule({
  declarations: [SpyDirective, HightLightDirective],
  exports: [SpyDirective, HightLightDirective],
})
export class DirectiveModule {}
