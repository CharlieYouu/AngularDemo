import { FirstPageComponent } from '@admin/page/first-page/first-page.component';
import { SecondPageComponent } from '@admin/page/second-page/second-page.component';
import { ThirdPageComponent } from '@admin/page/third-page/third-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobanComponent } from '@admin/page/moban/moban.component';

const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'moban-page', component: MobanComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
