import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdiComponent } from './prodi.component';
import { ProdiActionComponent } from './prodi-action/prodi-action.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProdiResolverService } from './prodi-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: ProdiComponent,
  },
  {
    path: 'action',
    component: ProdiActionComponent,
    resolve: {
      currentData: ProdiResolverService,
    }
  }
]

@NgModule({
  declarations: [
    ProdiComponent,
    ProdiActionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProdiModule { }
