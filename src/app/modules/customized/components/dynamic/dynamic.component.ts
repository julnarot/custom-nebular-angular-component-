import {Component, OnInit} from '@angular/core';
import {LauchSidenabService} from "../../../shared/services/lauch-sidenab.service";
import {NotFoundItemComponent} from "../../../shared/basics/components/not-found-item/not-found-item.component";
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-dynamic',
  template: `
    <nb-card>
      <nb-card-body>
        <button nbButton (click)="lauchComponent()">LaunchSidenav with custom component</button>
      </nb-card-body>
    </nb-card>
  `,
  styles: []
})
export class DynamicComponent implements OnInit {

  constructor(private lauchSidenabService: LauchSidenabService, private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {

  }

  lauchComponent(): void {
    this.lauchSidenabService.setDynamicComponent(NotFoundItemComponent);
    this.lauchSidenabService.getDynamicComponentResponse$().subscribe((com: any) => {
      com.instance.msg = 'Hello!!';
      com.instance.clickLoad.subscribe((f: any) => {

        this.sidebarService.collapse('right')
      })
    })

  }

}
