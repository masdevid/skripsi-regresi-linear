import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { Topik } from './topik';

@Injectable({
  providedIn: 'root'
})
export class TopikService  extends BaseCrudService<Topik>{

  constructor(public override http: HttpClient) {
    super(http)
    this.endpoint = 'topik'
  }
  predict(){
    const url = [this.baseUrl,'predict'].join('/')
    return this.http.get(url)
  }
}
