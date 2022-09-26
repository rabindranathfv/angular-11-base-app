import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast/toast.service';
import { OwnerFacade } from '../store/facade/owner.facade';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss'],
})
export class EditOwnerComponent implements OnInit, OnDestroy {

  infoModule = {
    name: 'ownerModule.editOwnerComponent.name',
    description: 'ownerModule.editOwnerComponent.description',
    icon: 'fa fa-user'
  };

  @ViewChild('successMessage') successMessage: TemplateRef<any>;
  @ViewChild('errorMessage') errorMessage: TemplateRef<any>;

  ownerForm: FormGroup;
  error$: Observable<any>;
  errorSuscription: Subscription;
  idOwner: number;

  constructor(
    private formBuilder: FormBuilder,
    private ownerFacade: OwnerFacade,
    public toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForms();
    this.susbcribeAlerts();
    this.validateIdCustomer();
  }

  validateIdCustomer() {
    this.idOwner = this.route.snapshot.params.id;
    this.idOwner != null ? this.configureEditInterface() : this.router.navigate(['not-found']);
  }

  configureEditInterface() {
    this.ownerFacade.loadOwner(this.idOwner);
    this.ownerFacade.getOwner(this.idOwner).subscribe(
      (owner) => {
        if (owner) {
          this.ownerForm.patchValue(owner);
          if (owner.account) {
            this.ownerForm.patchValue(owner.account);
          }

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
    this.ownerForm = this.formBuilder.group({
      id: [''],
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

  updateOwner() {
    if (this.ownerForm.valid) {
      const account: Account = this.ownerForm.value;
      const newOwner = {...this.ownerForm.value, account };
      newOwner.portfolioExecutives = ['In Proccess'];
      this.ownerFacade.updateOwner(newOwner);
    }
  }

  susbcribeAlerts() {
    this.error$ = this.ownerFacade.error$;
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
