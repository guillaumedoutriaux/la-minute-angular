import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromModel from '../../models';
import { Params } from '@angular/router';

export const getRouterState = createFeatureSelector<fromModel.RouterState>(
  'router-store'
);

export const getRouterStoreState = createSelector(
  getRouterState,
  (routerstate: fromModel.RouterState) => routerstate && routerstate.router
);

export const getRouterStateContent = createSelector(
  getRouterStoreState,
  (routerstate: fromRouter.RouterReducerState<fromModel.RouterStateCustom>) =>
    routerstate && routerstate.state
);

export const getRouterStateUrl = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) => routerstate && routerstate.url
);

export const getRouterStateParams = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) =>
    routerstate && routerstate.params
);

export const getRouterStateQueryParams = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) =>
    routerstate && routerstate.queryParams
);

export const getRouterQueryParamsData = createSelector(
  getRouterStateQueryParams,
  (params: Params): string => params && params.data
);

export const getRouterQueryParamsCurpage = createSelector(
  getRouterStateQueryParams,
  (params: Params): number => (params && params.p ? params.p * 1 : 1)
);

export const getRouterStateDatas = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) => routerstate && routerstate.data
);
