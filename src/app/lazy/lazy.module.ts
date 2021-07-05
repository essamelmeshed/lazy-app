import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [SobreComponent, AboutComponent]
})
export class LazyModule { }
