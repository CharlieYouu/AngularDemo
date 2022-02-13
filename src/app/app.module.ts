import { FirstPageComponent } from '@admin/page/first-page/first-page.component';
import { MobanComponent } from '@admin/page/moban/moban.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveModule } from '@directive/directive.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, FirstPageComponent, MobanComponent],
  imports: [BrowserModule, AppRoutingModule, DirectiveModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}