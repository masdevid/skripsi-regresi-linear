import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkripsiComponent } from './skripsi.component';
import { SkripsiActionComponent } from './skripsi-action/skripsi-action.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: SkripsiComponent

  },
  {
    path: 'action',
    component: SkripsiActionComponent,

  }
]

@NgModule({
  declarations: [
    SkripsiComponent,
    SkripsiActionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SkripsiModule { }
