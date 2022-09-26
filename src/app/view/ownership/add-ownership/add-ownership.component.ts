import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Owner } from 'src/app/interfaces/owner/owner.interface';
import { User } from 'src/app/interfaces/user/user';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { OwnerFacade } from '../../owner/store/facade/owner.facade';
import { OwnershipFacade } from '../store/facade/ownership.facade';

@Component({
  selector: 'app-add-ownership',
  templateUrl: './add-ownership.component.html',
  styleUrls: ['./add-ownership.component.scss']
})
export class AddOwnershipComponent implements OnInit, OnDestroy {

  infoModule = {
    name: 'ownershipModule.addOwnershipComponent.name',
    description: 'ownershipModule.addOwnershipComponent.description',
    icon: 'fa fa-user'
  };

  @ViewChild('successMessage') successMessage: TemplateRef<any>;
  @ViewChild('errorMessage') errorMessage: TemplateRef<any>;

  ownershipForm: FormGroup;
  owners$: Observable<Owner[]>;
  error$: Observable<any>;
  errorSuscription: Subscription;

  communes = ['Santiago', 'Santiago1', 'Santiago2'];
  bathrooms = ['5', '4', '3'];
  bedrooms = ['5', '4', '3'];

  constructor(
    private formBuilder: FormBuilder,
    private ownershipFacade: OwnershipFacade,
    private ownerFacade: OwnerFacade,
    private authFacade: AuthFacade,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForms();
    this.susbcribeAlerts();
    this.getOwners();
  }

  getOwners() {
    this.ownerFacade.getOwners();
    this.owners$ = this.ownerFacade.loadOwners();
  }

  ngOnDestroy() {
    this.errorSuscription.unsubscribe();
  }

  createForms() {
    this.ownershipForm = this.formBuilder.group({
      customerId: [''],
      ownersIds: [[], Validators.required],
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

  createOwnership() {
    if (this.ownershipForm.valid) {
      this.authFacade.customerId$.subscribe(
        (customerId) => {
          const newOwnership = {...this.ownershipForm.value, customerId};
          this.ownershipFacade.createOwnership(newOwnership);
        }
      );
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
