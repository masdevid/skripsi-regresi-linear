import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Mahasiswa } from 'src/app/services/mahasiswa';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { BasePage } from 'src/app/shared/base-page';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.scss']
})
export class MahasiswaComponent extends BasePage<Mahasiswa> implements OnInit, AfterViewInit, OnDestroy {

  constructor(public service: MahasiswaService, public router: Router, public activatedRoute: ActivatedRoute, public sb: MatSnackBar, public dialog: MatDialog, public helpers: HelpersService) {
    super(service, router, activatedRoute, sb, dialog, helpers)
    this.title = 'Mahasiswa'
    this.primaryKey       = 'id';
    this.sortActive       = 'nim';
    this.sortDirection    = 'asc';
    this.subject          = 'nim';
    const selectedFields  = 'nim,nama,prodi';
    this.displayedColumns = ['select', 'no', ...selectedFields.split(',').filter(f => f != 'id'), 'actions'];
  }

  ngOnInit(): void {
    super.ngOnInit()
  }
  ngOnDestroy(): void {
    super.ngOnDestroy()
  }
  ngAfterViewInit(): void {
    super.ngAfterViewInit()
  }
}
