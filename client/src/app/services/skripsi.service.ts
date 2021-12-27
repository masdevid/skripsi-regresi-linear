import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { Skripsi } from './skripsi';

@Injectable({
  providedIn: 'root'
})
export class SkripsiService extends BaseCrudService<Skripsi>{

  constructor(public override http: HttpClient) {
    super(http)
    this.endpoint = 'skripsi'
  }

}
