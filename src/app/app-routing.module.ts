import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/user/user.module').then((u) => u.UserModule),
  },
  {
    path: "help",
    loadChildren: () => import("./feature/additionals/additionals.module").then((a) => a.AdditionalsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
