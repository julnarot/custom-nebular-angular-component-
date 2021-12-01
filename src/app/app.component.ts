import {Component, ComponentFactoryResolver, ViewChild, OnInit} from '@angular/core';
import {LauchSidenabService} from "./modules/shared/services/lauch-sidenab.service";
import {NbSidebarService} from "@nebular/theme";
import {DynamicHostDirective} from "./modules/shared/basics/directives/dynamic-host.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'custom-nebular-angular-components';

  constructor() {
  }

}
