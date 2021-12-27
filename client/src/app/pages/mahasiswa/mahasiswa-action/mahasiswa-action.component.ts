import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Mahasiswa } from 'src/app/services/mahasiswa';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { Prodi } from 'src/app/services/prodi';
import { BaseActionComponent } from 'src/app/shared/base-action';

@Component({
  selector: 'app-mahasiswa-action',
  templateUrl: './mahasiswa-action.component.html',
  styleUrls: ['./mahasiswa-action.component.scss']
})
export class MahasiswaActionComponent extends BaseActionComponent<Mahasiswa> implements OnInit, OnDestroy {

  get f(){
    return this.form.controls
  }
  prodiList: Prodi[] = []
  constructor(
    public router:         Router,
    public activatedRoute: ActivatedRoute,
    public helpers:        HelpersService,
    public service:        MahasiswaService,
    public fb:             FormBuilder,
    public sb: MatSnackBar
    ) {
      super(router, activatedRoute, helpers, service, fb, sb);
      this.dataSource   = this.activatedRoute.snapshot.data['currentData'];
      this.prodiList = this.activatedRoute.snapshot.data['prodi'];
      this.redirectTo   = '/mahasiswa'
      this.subject      = 'nama';
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
        nim: [null, [Validators.required]],
        nama:     [null, [Validators.required]],
        prodi: [null, Validators.required],
      }
    }
  }
