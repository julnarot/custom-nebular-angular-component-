import {Component, ComponentFactoryResolver, ViewChild, OnInit} from '@angular/core';
import {LauchSidenabService} from "./modules/shared/services/lauch-sidenab.service";
import {NbSidebarService} from "@nebular/theme";
import {DynamicHostDirective} from "./modules/shared/basics/directives/dynamic-host.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'custom-nebular-angular-components';
  @ViewChild(DynamicHostDirective) public dynamicHost: DynamicHostDirective;

  constructor(
    private lauchSidenabRightService: LauchSidenabService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private sidebarService: NbSidebarService,
  ) {
  }

  ngOnInit() {
    this.lauchSidenabRightService.getDynamicHost()
      .subscribe((component: any) => {
        this.onLauchRightSidenab(component)
      });
  }

  onLauchRightSidenab(compo: any) {
    this.sidebarService.expand('right');
    const component = this.componentFactoryResolver.resolveComponentFactory(compo);
    this.dynamicHost.viewContainerRef.clear();
    const resp = this.dynamicHost.viewContainerRef.createComponent(component)
    setTimeout(() => {
      this.lauchSidenabRightService.setDynamicComponentResponse$(resp);
    }, 2)
  }
}
