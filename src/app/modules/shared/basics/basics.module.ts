import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbButtonModule, NbCardModule, NbIconModule} from "@nebular/theme";

const ANG_CORE = [
  CommonModule
];
const NB_MODULES = [
  NbCardModule,
  NbButtonModule,
  NbIconModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...ANG_CORE,
    ...NB_MODULES,
  ],
  exports: [
    ...ANG_CORE,
    ...NB_MODULES,
  ]
})
export class BasicsModule {
}
