import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromModel from '../../models';

export const reducers: ActionReducerMap<fromModel.RouterState> = {
  router: fromRouter.routerReducer
};
