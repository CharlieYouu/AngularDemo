import { Direct1Component } from "./admin/component/direct/direct1.component";
import { DirectPageComponent } from "@admin/page/direct-page/direct-page.component";
import { FirstPageComponent } from "@admin/page/first-page/first-page.component";
import { MobanComponent } from "@admin/page/moban/moban.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DirectiveModule } from "@directive/directive.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Direct2Component } from "@admin/component/direct2/direct2.component";
import { Direct3Component } from "@admin/component/direct3/direct3.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    MobanComponent,
    DirectPageComponent,
    Direct1Component,
    Direct2Component,
    Direct3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, DirectiveModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
