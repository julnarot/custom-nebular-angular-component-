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
import { SingleFilterPipe } from './single-filter.pipe';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DualSelectorComponent,
    SingleFilterPipe
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbIconModule,
        NbListModule,
        NbButtonModule,
        NbInputModule,
        NbFormFieldModule,
        FormsModule
    ],
  exports: [
    DualSelectorComponent
  ]
})
export class DualSelectorModule { }
