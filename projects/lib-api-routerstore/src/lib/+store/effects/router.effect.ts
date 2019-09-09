import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';

import * as fromActions from '../actions';

@Injectable()
export class RouterEffects {
  private currentUrl: { path: string; params: any; rawUrl: string };
  private previousUrl: { path: string; params: any; rawUrl: string };

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private viewportScroller: ViewportScroller
  ) {
    this.currentUrl = this.buildUrl(this.router.url);
  }

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.Go),
        tap(({ path, query: queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.Back),
        tap(_ => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.Forward),
        tap(_ => this.location.forward())
      ),
    { dispatch: false }
  );

  savePreviousUrl$ = createEffect(
    () =>
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          this.previousUrl = { ...this.currentUrl };
          this.currentUrl = this.buildUrl(event.url);
        })
      ),
    { dispatch: false }
  );

  restoreScrollPosition$ = createEffect(
    () =>
      this.router.events.pipe(
        filter(e => e instanceof Scroll),
        tap((event: Scroll) => {
          if (event.position) {
            this.viewportScroller.scrollToPosition(event.position);
          } else if (event.anchor) {
            this.viewportScroller.scrollToAnchor(event.anchor);
          } else {
            // scroll Top everytime except when we change the filters (data param)
            if (
              this.currentUrl.path === this.previousUrl.path &&
              this.currentUrl.params.data !== this.previousUrl.params.data
            ) {
              // don't scroll
            } else {
              this.viewportScroller.scrollToPosition([0, 0]);
            }
          }
        })
      ),
    { dispatch: false }
  );

  private buildUrl(pUrl: string) {
    const url = pUrl.split('?');
    const params = url[1]
      ? url[1].split('&').reduce((p, c) => {
          const components = c.split('=');
          p[components[0]] = components[1];
          return p;
        }, {})
      : {};
    return {
      path: url[0] ? url[0] : '/',
      params,
      rawUrl: pUrl
    };
  }
}
