import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { Prodi } from './prodi';

@Injectable({
  providedIn: 'root'
})
export class ProdiService  extends BaseCrudService<Prodi>{

  constructor(public override http: HttpClient) {
    super(http)
    this.endpoint = 'prodi'
  }

}
