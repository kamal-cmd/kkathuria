import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
const routes: Routes = [
  {path:'companyinfo' , component:CompanyinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
