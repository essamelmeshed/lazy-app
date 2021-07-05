import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path: 'Sobre', component: SobreComponent},
  {path: 'About', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
