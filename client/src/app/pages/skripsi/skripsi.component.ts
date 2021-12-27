import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Skripsi } from 'src/app/services/skripsi';
import { SkripsiService } from 'src/app/services/skripsi.service';
import { BasePage } from 'src/app/shared/base-page';

@Component({
  selector: 'app-skripsi',
  templateUrl: './skripsi.component.html',
  styleUrls: ['./skripsi.component.scss']
})
export class SkripsiComponent extends BasePage<Skripsi> implements OnInit, AfterViewInit, OnDestroy {

  constructor(public service: SkripsiService, public router: Router, public activatedRoute: ActivatedRoute, public sb: MatSnackBar, public dialog: MatDialog, public helpers: HelpersService) {
    super(service, router, activatedRoute, sb, dialog, helpers)
    this.title = 'Skripsi'
    this.primaryKey       = 'id';
    this.sortActive       = 'nama';
    this.sortDirection    = 'asc';
    this.subject          = 'nama';
    const selectedFields  = 'tahun,prodi,nim,judul,topik';
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
