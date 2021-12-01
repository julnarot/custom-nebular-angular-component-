import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DualSelectorComponent } from './dual-selector.component';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbListModule
} from "@nebular/theme";



@NgModule({
  declarations: [
    DualSelectorComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule
  ],
  exports: [
    DualSelectorComponent
  ]
})
export class DualSelectorModule { }
