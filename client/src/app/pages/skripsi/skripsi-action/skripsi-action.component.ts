import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Prodi } from 'src/app/services/prodi';
import { Skripsi } from 'src/app/services/skripsi';
import { SkripsiService } from 'src/app/services/skripsi.service';
import { Topik } from 'src/app/services/topik';
import { BaseActionComponent } from 'src/app/shared/base-action';

@Component({
  selector: 'app-skripsi-action',
  templateUrl: './skripsi-action.component.html',
  styleUrls: ['./skripsi-action.component.scss']
})
export class SkripsiActionComponent extends BaseActionComponent<Skripsi> implements OnInit, OnDestroy {

  get f(){
    return this.form.controls
  }
  topikList: Topik[] = []
  prodiList: Prodi[] = []
  constructor(
    public router:         Router,
    public activatedRoute: ActivatedRoute,
    public helpers:        HelpersService,
    public service:        SkripsiService,
    public fb:             FormBuilder,
    public sb: MatSnackBar
    ) {
      super(router, activatedRoute, helpers, service, fb, sb);
      this.dataSource   = this.activatedRoute.snapshot.data['currentData'];
      this.prodiList = this.activatedRoute.snapshot.data['prodi'];
      this.topikList = this.activatedRoute.snapshot.data['topik']
      this.redirectTo   = '/skripsi'
      this.subject      = 'judul';
      this.createForm();
    }
    ngOnInit(): void {
      super.ngOnInit();
    }

    ngOnDestroy(): void {
      super.ngOnDestroy();
    }

    defaultForm() {
      return {
        topik: [null, Validators.required],
        nim: [null, [Validators.required]],
        judul:     [null, [Validators.required]],
        tahun: [new Date().getFullYear(), [Validators.required]],
        prodi: [null, Validators.required],
      }
    }
  }
