import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbButtonModule, NbCardModule, NbIconModule} from "@nebular/theme";
import {DynamicHostDirective} from "./directives/dynamic-host.directive";
import {NotFoundItemComponent} from './components/not-found-item/not-found-item.component';

const ANG_CORE = [
  CommonModule
];
const NB_MODULES = [
  NbCardModule,
  NbButtonModule,
  NbIconModule,
];

const DIRECTVS = [
  DynamicHostDirective
]
const COMPNTS = [
  NotFoundItemComponent
]

@NgModule({
  declarations: [
    ...DIRECTVS,
    ...COMPNTS,
  ],
  imports: [
    ...ANG_CORE,
    ...NB_MODULES,
  ],
  exports: [
    ...ANG_CORE,
    ...NB_MODULES,
    ...DIRECTVS,
    ...COMPNTS
  ]
})
export class BasicsModule {
}
