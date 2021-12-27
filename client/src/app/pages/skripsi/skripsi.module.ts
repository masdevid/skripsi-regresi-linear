import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkripsiComponent } from './skripsi.component';
import { SkripsiActionComponent } from './skripsi-action/skripsi-action.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkripsiResolverService } from './skripsi-resolver.service';
import { TopikService } from 'src/app/services/topik.service';
import { ProdiService } from 'src/app/services/prodi.service';


const routes: Routes = [
  {
    path: '',
    component: SkripsiComponent
  },
  {
    path: 'action',
    component: SkripsiActionComponent,
    resolve: {
      currentData: SkripsiResolverService,
      topik: TopikService,
      prodi: ProdiService
    }
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
