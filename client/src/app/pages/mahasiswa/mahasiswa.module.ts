import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MahasiswaComponent } from './mahasiswa.component';
import { MahasiswaActionComponent } from './mahasiswa-action/mahasiswa-action.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: MahasiswaComponent

  },
  {
    path: 'action',
    component: MahasiswaActionComponent,

  }
]

@NgModule({
  declarations: [
    MahasiswaComponent,
    MahasiswaActionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MahasiswaModule { }
