import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs.routes';
import * as fromContainer from './containers';

@NgModule({
  declarations: [...fromContainer.containers],
  imports: [CommonModule, RxjsRoutingModule]
})
export class RxjsModule {}
