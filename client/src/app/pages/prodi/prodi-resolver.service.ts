import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseCrudService } from 'src/app/services/base-crud.service';
import { Prodi } from 'src/app/services/prodi';
import { ActionResolver } from 'src/app/shared/action-resolver';

@Injectable({
  providedIn: 'root'
})
export class ProdiResolverService extends ActionResolver<Prodi>{
  constructor(
    public router:  Router,
    public service: BaseCrudService<Prodi>,
    public sb: MatSnackBar
  ) {
    super(router, service, sb);
  }

  getById(id){
    return this.service.getById(id)
  }

}
