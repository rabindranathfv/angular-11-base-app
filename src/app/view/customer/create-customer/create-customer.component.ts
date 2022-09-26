import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CustomerFacade } from '../store/facade/customer.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit, OnDestroy {

  infoModule = {
    name: 'customerModule.createCustomerComponent.name',
    description: 'customerModule.createCustomerComponent.description',
    icon: 'fa fa-user'
  };

  languageOptions = [
    { name: 'configModule.lang.es', value: 'ES'},
    { name: 'configModule.lang.en', value: 'EN'}
  ];

  @ViewChild('successMessage') successMessage: TemplateRef<any>;
  @ViewChild('errorMessage') errorMessage: TemplateRef<any>;

  customerForm: FormGroup;
  configForm: FormGroup;
  viewOption: string;
  idCustomer: number;
  error$: Observable<any>;
  errorSuscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private customerFacade: CustomerFacade,
    private route: ActivatedRoute,
    private router: Router,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForms();
    this.validateIdCustomer();
    this.susbcribeAlerts();
  }

  ngOnDestroy() {
    this.errorSuscription.unsubscribe();
  }

  validateIdCustomer() {
    this.idCustomer = parseInt(this.route.snapshot.params.id, 10);
    this.idCustomer ? this.configureEditInterface() : this.viewOption = 'create';
  }

  configureEditInterface() {
    this.viewOption = 'edit';
    this.infoModule.name = 'customerModule.editCustomerComponent.name';
    this.infoModule.description = 'customerModule.editCustomerComponent.description',
    this.customerFacade.loadCustomer(this.idCustomer);
    this.customerFacade.getCustomer(this.idCustomer).subscribe(
      (customer) => {
        if (customer) {
          this.customerForm.patchValue(customer);
          if (customer.configuration ) {
            this.configForm.patchValue(customer.configuration);
          }
        } else {
          this.router.navigate(['not-found']);
        }
      }
    );
  }

  createForms() {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      legalRepresentative: ['', Validators.required],
      taxInternationalIdentifier: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      primaryPhone: ['', [Validators.required]],
      secondaryPhone: ['', [Validators.required]],
    });
    this.configForm = this.formBuilder.group({
      slogan: ['', Validators.required],
      language: ['', Validators.required],
      logo: ['', Validators.required],
      logoMobile: ['', Validators.required],
      mainColor: ['', Validators.required],
      secondaryColor: ['', Validators.required],
    });
  }

  setConfigFormValue(attr: string, value: string) {
    this.configForm.controls[attr].setValue(value);
  }

  createCustomer() {
    if (this.customerForm.valid && this.configForm.value) {
      const newCustomer = {
        ...this.customerForm.value,
        configuration: {
          ...this.configForm.value,
          modules: { modules: 'modules'} // Define with back-end developers
        }
      };
      this.viewOption === 'create' ?
        this.customerFacade.createCustomer(newCustomer) :
        this.customerFacade.updateCustomer({...newCustomer, id: this.idCustomer});
    }
  }

  susbcribeAlerts() {
    this.error$ = this.customerFacade.error$;
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
