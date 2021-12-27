import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseCrudService } from 'src/app/services/base-crud.service';
import { Topik } from 'src/app/services/topik';
import { ActionResolver } from 'src/app/shared/action-resolver';

@Injectable({
  providedIn: 'root'
})
export class TopikResolverService extends ActionResolver<Topik>{
  constructor(
    public router:  Router,
    public service: BaseCrudService<Topik>,
    public sb: MatSnackBar
  ) {
    super(router, service, sb);
  }

  getById(id){
    return this.service.getById(id)
  }

}
