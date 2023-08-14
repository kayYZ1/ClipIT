import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { LicensingComponent } from './pages/licensing/licensing.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'licensing', component: LicensingComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
