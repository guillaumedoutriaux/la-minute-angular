import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { LibApiRouterstoreModule } from '@workspace/lib-api-routerstore/src/public-api';

export const metaReducers: MetaReducer<{}>[] = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibApiRouterstoreModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 50 // Retains last 50 states
      // logOnly: environment.production // Restrict extension to log-only mode
    })
  ]
})
export class NgrxconfigModule {}
