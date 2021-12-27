import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { User } from 'src/app/services/user';
export interface Menus {
  url: string;
  label: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globalService: GlobalService, private router: Router) {
    this.globalService.currentUser.subscribe(user => {
      this.currentUser = user
    })
  }
  menus: Menus[] = [
    {
      url: 'dashboard',
      label: 'Dashboard'
    },
    {
      url: 'mahasiswa',
      label: 'Mahasiswa'
    },
    {
      url: 'prodi',
      label: 'Prodi'
    },
    {
      url: 'topik',
      label: 'Topik'
    },
    {
      url: 'skripsi',
      label: 'Skripsi'
    }
  ]
  currentUser: User | null = null;
  ngOnInit(): void {
  }
  login(){
    this.router.navigateByUrl('/login')
  }
  logout(){
    this.globalService.isLogin = null;
    this.router.navigate(['/'])
  }
}
