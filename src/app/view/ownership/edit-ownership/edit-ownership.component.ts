import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast/toast.service';
import { OwnershipFacade } from '../store/facade/ownership.facade';

@Component({
  selector: 'app-edit-ownership',
  templateUrl: './edit-ownership.component.html',
  styleUrls: ['./edit-ownership.component.scss'],
})
export class EditOwnershipComponent implements OnInit, OnDestroy {

  infoModule = {
    name: 'ownershipModule.editOwnershipComponent.name',
    description: 'ownershipModule.editOwnershipComponent.description',
    icon: 'fa fa-user'
  };

  communes = ['Santiago', 'Santiago1', 'Santiago2'];
  bathrooms = ['5', '4', '3'];
  bedrooms = ['5', '4', '3'];

  @ViewChild('successMessage') successMessage: TemplateRef<any>;
  @ViewChild('errorMessage') errorMessage: TemplateRef<any>;

  ownershipForm: FormGroup;
  error$: Observable<any>;
  errorSuscription: Subscription;
  idOwnership: number;

  constructor(
    private formBuilder: FormBuilder,
    private ownershipFacade: OwnershipFacade,
    public toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForms();
    this.susbcribeAlerts();
    this.validateIdCustomer();
  }

  validateIdCustomer() {
    this.idOwnership = this.route.snapshot.params.id;
    this.idOwnership != null ? this.configureEditInterface() : this.router.navigate(['not-found']);
  }

  configureEditInterface() {
    this.ownershipFacade.loadOwnership(this.idOwnership);
    this.ownershipFacade.getOwnership(this.idOwnership).subscribe(
      (ownership) => {
        if (ownership) {
          this.ownershipForm.patchValue(ownership);
        } else {
          this.router.navigate(['not-found']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.errorSuscription.unsubscribe();
  }

  createForms() {
    this.ownershipForm = this.formBuilder.group({
      customerId: [''],
      id: [''],
      admissionDate: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      department: ['', Validators.required],
      communes: [[], Validators.required],
      propertyType: ['', Validators.required],
      hasWarehouse: ['', Validators.required],
      hasParking: ['', Validators.required],
      role: ['', Validators.required],
      minimumAmount: ['', Validators.required],
      maximumAmount: ['', Validators.required],
      administrationPhone: ['', Validators.required],
      administrationContact: ['', Validators.required],
      isAssertion: ['', Validators.required],
      electricityClientNumber: ['', Validators.required],
      gasClientNumber: ['', Validators.required],
      waterClientNumber: ['', Validators.required],
      bedrooms: [[], Validators.required],
      bathrooms: [[], Validators.required],
      images: [[], Validators.required],
      surfaceM2: ['', Validators.required],
      orientation: ['', Validators.required],
      realState: ['', Validators.required],
      metro: ['', Validators.required],
      availableDate: ['', Validators.required],
      moreFeatures: [''],
    });

  }

  setFormValue(attr: string, value: string) {
    this.ownershipForm.controls[attr].setValue(value);
  }

  pushFormValue(attr: string, value: string) {
    const formValue = [...this.ownershipForm.controls[attr].value];
    if (formValue.indexOf(value) !== -1) {
      const newArray = formValue.filter((item) => item !== value);
      this.ownershipForm.controls[attr].setValue(newArray);
    } else {
      formValue.push(value);
      this.ownershipForm.controls[attr].setValue(formValue);
    }

  }

  updateOwnership() {
    if (this.ownershipForm.valid) {
      const newOwnership = {...this.ownershipForm.value };
      this.ownershipFacade.updateOwnership(newOwnership);
    }
  }

  susbcribeAlerts() {
    this.error$ = this.ownershipFacade.error$;
    this.errorSuscription = this.error$.subscribe(
      (error) => {
        if (error !== null && this.successMessage !== undefined) {
          if (error === false ) {
            this.toastService.show(this.successMessage);
          } else {
            this.toastService.show(this.errorMessage);
          }
        }
      }
    );
  }


}
