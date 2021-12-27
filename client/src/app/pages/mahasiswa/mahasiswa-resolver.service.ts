import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseCrudService } from 'src/app/services/base-crud.service';
import { Mahasiswa } from 'src/app/services/mahasiswa';
import { ActionResolver } from 'src/app/shared/action-resolver';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaResolverService extends ActionResolver<Mahasiswa>{
  constructor(
    public router:  Router,
    public service: BaseCrudService<Mahasiswa>,
    public sb: MatSnackBar
  ) {
    super(router, service, sb);
  }

  getById(id){
    return this.service.getById(id)
  }

}
