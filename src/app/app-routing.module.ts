import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/user/user.module').then((u) => u.UserModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./feature/dashboard/dashboard.module').then(
        (d) => d.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
