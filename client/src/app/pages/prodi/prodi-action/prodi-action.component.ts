import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Prodi } from 'src/app/services/prodi';
import { ProdiService } from 'src/app/services/prodi.service';
import { BaseActionComponent } from 'src/app/shared/base-action';

@Component({
  selector: 'app-prodi-action',
  templateUrl: './prodi-action.component.html',
  styleUrls: ['./prodi-action.component.scss']
})
export class ProdiActionComponent extends BaseActionComponent<Prodi> implements OnInit, OnDestroy {

  get f(){
    return this.form.controls
  }
  constructor(
    public router:         Router,
    public activatedRoute: ActivatedRoute,
    public helpers:        HelpersService,
    public service:        ProdiService,
    public fb:             FormBuilder,
    public sb: MatSnackBar
    ) {
      super(router, activatedRoute, helpers, service, fb, sb);
      this.dataSource   = this.activatedRoute.snapshot.data['currentData'];
      this.redirectTo   = '/prodi'
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
        nama:     [null, [Validators.required]],
      }
    }
  }
