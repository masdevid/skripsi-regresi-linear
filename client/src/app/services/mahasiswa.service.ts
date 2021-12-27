import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { Mahasiswa } from './mahasiswa';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService extends BaseCrudService<Mahasiswa>{

  constructor(public override http: HttpClient) {
    super(http)
    this.endpoint = 'mahasiswa'
  }

}
