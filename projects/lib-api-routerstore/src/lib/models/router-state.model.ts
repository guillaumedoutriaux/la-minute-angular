import { Params, Data } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface RouterState {
  router: RouterReducerState<RouterStateCustom>;
}

export interface RouterStateCustom {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}
