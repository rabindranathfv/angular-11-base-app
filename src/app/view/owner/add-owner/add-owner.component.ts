import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Account } from 'src/app/interfaces/account/account';
import { Owner } from 'src/app/interfaces/owner/owner.interface';
import { User } from 'src/app/interfaces/user/user';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserFacade } from '../../user/store/facade/user.facade';
import { OwnerFacade } from '../store/facade/owner.facade';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})
export class AddOwnerComponent implements OnInit, OnDestroy {

  infoModule = {
    name: 'ownerModule.addOwnerComponent.name',
    description: 'ownerModule.addOwnerComponent.description',
    icon: 'fa fa-user'
  };

  @ViewChild('successMessage') successMessage: TemplateRef<any>;
  @ViewChild('errorMessage') errorMessage: TemplateRef<any>;

  ownerForm: FormGroup;
  users$: Observable<User[]>;
  error$: Observable<any>;
  errorSuscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private ownerFacade: OwnerFacade,
    private userFacade: UserFacade,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForms();
    this.susbcribeAlerts();
    this.getUsers();
  }

  getUsers() {
    this.userFacade.getUsers();
    this.users$ = this.userFacade.loadUsers();

  }

  ngOnDestroy() {
    this.errorSuscription.unsubscribe();
  }

  createForms() {
    this.ownerForm = this.formBuilder.group({
      userId: ['', Validators.required],
      business: ['', Validators.required],
      position: ['', Validators.required],
      comercialAddress: ['', Validators.required],
      admissionDate: ['', Validators.required],
      fixedAmount: ['', Validators.required],
      administrationPercent: ['', Validators.required],
      brokeragePercent: ['', Validators.required],
      observations: ['', Validators.required],
      portfolioExecutives: ['', Validators.required],
      assistantFirstName: ['', Validators.required],
      assistantLastName: ['', Validators.required],
      assistantPhone: ['', Validators.required],
      assistantEmail: ['', Validators.required],
      bank: ['', Validators.required],
      accountType: ['', Validators.required],
      accountNumber: ['', Validators.required],
      titularFirstName: ['', Validators.required],
      titularLastName: ['', Validators.required],
      titularTaxInternationalIdentifier: ['', Validators.required]
    });

  }

  setFormValue(attr: string, value: string) {
    this.ownerForm.controls[attr].setValue(value);
  }

  createOwner() {
    if (this.ownerForm.valid) {
      const account: Account = this.ownerForm.value;
      const newOwner = {...this.ownerForm.value, account };
      newOwner.portfolioExecutives = ['In Proccess'];
      this.ownerFacade.createOwner(newOwner);
    }
  }

  susbcribeAlerts() {
    this.error$ = this.ownerFacade.error$;
    this.errorSuscription = this.error$.subscribe(
      (error) => {
        if (error !== null && this.successMessage !== undefined) {
          if (error) {
            this.toastService.show(this.errorMessage);
          } else {
            this.toastService.show(this.successMessage);
          }
        }
      }
    );
  }


}
