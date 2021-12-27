import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Prodi } from 'src/app/services/prodi';
import { ProdiService } from 'src/app/services/prodi.service';
import { BasePage } from 'src/app/shared/base-page';

@Component({
  selector: 'app-prodi',
  templateUrl: './prodi.component.html',
  styleUrls: ['./prodi.component.scss']
})
export class ProdiComponent extends BasePage<Prodi> implements OnInit, AfterViewInit, OnDestroy {

  constructor(public service: ProdiService, public router: Router, public activatedRoute: ActivatedRoute, public sb: MatSnackBar, public dialog: MatDialog, public helpers: HelpersService) {
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
