import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizedRoutingModule } from './customized-routing.module';
import { CustomizedComponent } from './customized.component';
import { DualExampleComponent } from './components/dual-example/dual-example.component';
import {DualSelectorModule} from "../shared/dual-selector/dual-selector.module";
import {BasicsModule} from "../shared/basics/basics.module";
import { DynamicComponent } from './components/dynamic/dynamic.component';


@NgModule({
  declarations: [
    CustomizedComponent,
    DualExampleComponent,
    DynamicComponent
  ],
  imports: [
    CommonModule,
    CustomizedRoutingModule,
    DualSelectorModule,
    BasicsModule
  ]
})
export class CustomizedModule { }
