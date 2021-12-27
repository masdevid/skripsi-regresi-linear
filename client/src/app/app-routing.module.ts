import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./pages/landing/landing.module').then(m => m.LandingModule)},
  { path: 'login', loadChildren: ()=>import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'mahasiswa', loadChildren: ()=>import('./pages/mahasiswa/mahasiswa.module').then(m => m.MahasiswaModule), canActivate: [AuthGuard]},
  { path: 'prodi', loadChildren: ()=>import('./pages/prodi/prodi.module').then(m => m.ProdiModule), canActivate: [AuthGuard]},
  { path: 'topik', loadChildren: ()=>import('./pages/topik/topik.module').then(m => m.TopikModule), canActivate: [AuthGuard]},
  { path: 'skripsi', loadChildren: ()=>import('./pages/skripsi/skripsi.module').then(m => m.SkripsiModule), canActivate: [AuthGuard]},
  { path: 'dashboard', loadChildren: ()=>import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]},
  { path: 'error-404', loadChildren: ()=>import('./pages/error404/error404.module').then(m => m.Error404Module)},
  { path: '**', redirectTo: 'error-404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
