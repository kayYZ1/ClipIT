import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainViewComponent
  ]
})
export class MainViewModule { }
