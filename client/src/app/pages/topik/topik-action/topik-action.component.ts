import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';
import { Topik } from 'src/app/services/topik';
import { TopikService } from 'src/app/services/topik.service';
import { BaseActionComponent } from 'src/app/shared/base-action';

@Component({
  selector: 'app-topik-action',
  templateUrl: './topik-action.component.html',
  styleUrls: ['./topik-action.component.scss']
})
export class TopikActionComponent extends BaseActionComponent<Topik> implements OnInit, OnDestroy {

  get f(){
    return this.form.controls
  }
  constructor(
    public router:         Router,
    public activatedRoute: ActivatedRoute,
    public helpers:        HelpersService,
    public service:        TopikService,
    public fb:             FormBuilder,
    public sb: MatSnackBar
    ) {
      super(router, activatedRoute, helpers, service, fb, sb);
      this.dataSource   = this.activatedRoute.snapshot.data['currentData'];
      this.redirectTo   = '/topik'
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
