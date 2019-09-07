import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@workspace/ng-content/src/public_api').then(
        m => m.NgContentModule
      )
  },
  {
    path: 'ng-content',
    loadChildren: () =>
      import('@workspace/ng-content/src/public_api').then(
        m => m.NgContentModule
      )
  },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('@workspace/rxjs/src/public-api').then(m => m.RxjsModule)
  }
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: 'error/404'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
