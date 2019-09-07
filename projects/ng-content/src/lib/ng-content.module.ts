import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainers from './containers';
import { NgContentRoutingModule } from './ng-content.routes';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, NgContentRoutingModule]
})
export class NgContentModule {}
