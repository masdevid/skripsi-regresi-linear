import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { ProdiService } from 'src/app/services/prodi.service';
import { SkripsiService } from 'src/app/services/skripsi.service';
import { Topik } from 'src/app/services/topik';
import { TopikService } from 'src/app/services/topik.service';

export interface PredictResult{
  COD: number;
  MSE: number;
  coeff: number[];
  prediction: number[]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private topikService: TopikService, private mahasiswaService: MahasiswaService, private prodiService: ProdiService, private skripsiService: SkripsiService) { }
  isLoading = false;
  topikList: Topik[];
  result: any;
  counter = {
    mahasiswa: 0,
    topik: 0,
    skripsi: 0,
    prodi: 0
  }
  ngOnInit(): void {
    this.getTopic()
    this.getMahasiswa()
    this.getProdi()
    this.getSkripsi()
  }
  parseInt(num: string){
    return parseInt(num)
  }
  getTopic(){
    this.topikService.getAll({ limit: 0, offset: 0}).subscribe(topic => {
      this.topikList = topic;
      this.counter.topik = topic.length;
    })
  }
  getSkripsi(){
    this.skripsiService.count().subscribe(data => {
      this.counter.skripsi = data.count;
    })
  }
  getMahasiswa(){
    this.mahasiswaService.count().subscribe(data => {
      this.counter.mahasiswa = data.count;
    })
  }
  getProdi(){
    this.prodiService.count().subscribe(data => {
      this.counter.prodi = data.count;
    })
  }
  predict(){
    this.isLoading = true;
    this.topikService.predict().subscribe((res) => {
      this.result = res;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    })
  }
}
