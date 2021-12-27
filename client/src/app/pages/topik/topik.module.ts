import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopikComponent } from './topik.component';
import { TopikActionComponent } from './topik-action/topik-action.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TopikComponent
  },
  {
    path: 'action',
    component: TopikActionComponent,

  }
]

@NgModule({
  declarations: [
    TopikComponent,
    TopikActionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TopikModule { }
