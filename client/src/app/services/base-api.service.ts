import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpQueries } from './http-queries';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(public http: HttpClient) { }
  endpoint: string = '';
  baseUrl: string = environment.host;

  generateQueries(query: HttpQueries){
    console.log(query);

    let params = new HttpParams();
    const { limit, offset, sort } = query;
    params = params.append('limit', limit ?? 10 )
    params = params.append('page', offset ?? 0)
    if (sort) params = params.append('sort', sort)
    return params;
  }


}
