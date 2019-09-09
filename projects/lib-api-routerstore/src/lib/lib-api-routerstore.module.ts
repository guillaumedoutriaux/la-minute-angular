import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { reducers, effects, CustomSerializer } from './+store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('router-store', reducers),
    EffectsModule.forFeature(effects),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class LibApiRouterstoreModule {}
