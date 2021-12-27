import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseCrudService } from 'src/app/services/base-crud.service';
import { Skripsi } from 'src/app/services/skripsi';
import { ActionResolver } from 'src/app/shared/action-resolver';

@Injectable({
  providedIn: 'root'
})
export class SkripsiResolverService extends ActionResolver<Skripsi>{
  constructor(
    public router:  Router,
    public service: BaseCrudService<Skripsi>,
    public sb: MatSnackBar
  ) {
    super(router, service, sb);
  }

  getById(id){
    return this.service.getById(id)
  }

}
