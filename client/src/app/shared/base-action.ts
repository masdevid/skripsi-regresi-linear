import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import * as moment from 'moment';
import { BaseApiService } from "../services/base-api.service";
import { HelpersService } from "../services/helpers.service";

@Component({
  selector: 'app-base-action',
  template: ``,
})

export class BaseActionComponent<T> implements OnInit, OnDestroy {
  public unsubs = new Subject();
  public form!: FormGroup;
  dataSource!: T;
  query: any;
  redirectTo!: string;
  subject!: string;
  errors: string[] = []
  sourceImage: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public helpers: HelpersService,
    public service: BaseApiService<T>,
    public fb: FormBuilder,
  ) {
    this.checkQueryParam();
  }
  createForm(): void {
    this.form = this.fb.group(this.defaultForm());
    this.setForm();
  }
  defaultForm(){
    return {}
  }
  ngOnInit(): void {

  }
  setForm(){
    if (this.dataSource) {
      this.form.patchValue(this.dataSource)
    }
    setTimeout(() => {
     this.afterSetForm()
    });
  }
  afterSetForm(): void {

  }
  checkQueryParam(): void {
    this.activatedRoute.queryParams.subscribe(query => {
      this.query = query;
    });
    if (this.router.getCurrentNavigation()?.extras?.state?.data) {
      this.dataSource = this.router.getCurrentNavigation()?.extras?.state?.data
    } else {
      this.service.getById(this.query.id)
        .then(data => {
          this.dataSource = data;
          this.setForm()
        })
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.query.m === 'add') {
        this.insert();
      } else {
        this.update();
      }
    }
  }

  onBack(isBack = true): void {
    if (isBack) {
      this.router.navigate([`../../${this.redirectTo}`], {
        relativeTo: this.activatedRoute
      });
    }
  }

  beforeSave(): T {
    return this.checkDateBeforeSave(this.form.value);
  }

  checkDateBeforeSave(data: any): T {
    Object.keys(data).forEach(key => {
      const dataType = typeof data[key];
      if (dataType == 'object' && moment.isMoment(data[key])) {
        data[key] = moment(data[key]).format('YYYY-MM-DD');
      }
    });
    return data;
  }

  insert(): void {
    const data = this.beforeSave();
    this.service.insert(data).then(() => {
      this.onSuccess()
    }).catch(err => this.onError(err))
  }
  update(): void {
    const data = this.beforeSave();
    this.service.updateById(this.query.id, data).then(() => {
      this.onSuccess()
    }).catch(err => this.onError(err))
  }
  onSuccess(): void {
    this.helpers.sbSuccess(`saved!`);
    this.onBack();
  }

  onError(err: any): void {
    this.helpers.sbError(err);
  }

  handleImageChange(event: any, imageFormName: string): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => this.sourceImage = reader.result;
      reader.readAsDataURL(file);
      this.form.get(imageFormName)?.setValue(file);
    }
  }

  convertToFormDataFormat(data: any): FormData {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      let value;
      if (typeof data[key] == 'boolean') {
        value = data[key] ? 1 : 0;
      } else {
        value = data[key] ? data[key] : '';
      }
      formData.append(key, value);
    });
    return formData;
  }

  ngOnDestroy(): void {
    this.unsubs.next('');
    this.unsubs.complete();
    // this.service.unsubscribeAll()
  }
}
