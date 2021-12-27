import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: Error404Component

  },
]

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Error404Module { }
