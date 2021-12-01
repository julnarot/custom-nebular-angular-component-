import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicHostDirective} from "../directives/dynamic-host.directive";
import {NbSidebarService} from "@nebular/theme";
import {LauchSidenabService} from "../../services/lauch-sidenab.service";

@Component({
  selector: 'app-container-dynam-directive',
  template: `
    <ng-template appDynamicHost>
    </ng-template>
  `,
  styles: []
})
export class ContainerDynamDirectiveComponent implements OnInit {
  @ViewChild(DynamicHostDirective) public dynamicHost: DynamicHostDirective;

  constructor(
    private lauchSidenabRightService: LauchSidenabService,
  ) {
    this.lauchSidenabRightService.containerDynamDirectiveComponent = this;
  }

  ngOnInit(): void {

  }


}
