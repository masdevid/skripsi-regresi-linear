import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Topik } from 'src/app/services/topik';
import { TopikService } from 'src/app/services/topik.service';
import { BasePage } from 'src/app/shared/base-page';

@Component({
  selector: 'app-topik',
  templateUrl: './topik.component.html',
  styleUrls: ['./topik.component.scss']
})
export class TopikComponent extends BasePage<Topik> implements OnInit, AfterViewInit, OnDestroy {

  constructor(public service: TopikService, public router: Router, public activatedRoute: ActivatedRoute, public sb: MatSnackBar, public dialog: MatDialog, public helpers: HelpersService) {
    super(service, router, activatedRoute, sb, dialog, helpers)
    this.title = 'Prodi'
    this.primaryKey       = 'id';
    this.sortActive       = 'nama';
    this.sortDirection    = 'asc';
    this.subject          = 'nama';
    const selectedFields  = 'nama';
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
