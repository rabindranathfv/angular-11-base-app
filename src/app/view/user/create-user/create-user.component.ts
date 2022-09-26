import { OnDestroy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserFacade } from '../store/facade/user.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { ToastService } from 'src/app/services/toast/toast.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  infoModule = {
    name: 'userModule.createUserComponent.name',
    description: 'userModule.createUserComponent.description',
    icon: 'fa fa-user'
  };

  @ViewChild('successMessage') successMessage: TemplateRef<any>;
  @ViewChild('errorMessage') errorMessage: TemplateRef<any>;

  userForm: FormGroup;
  configForm: FormGroup;
  viewOption: string;
  idUser: number;
  roles$: Observable<any[]>;
  error$: Observable<any>;
  errorSuscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userFacade: UserFacade,
    private authFacade: AuthFacade,
    private route: ActivatedRoute,
    private router: Router,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForms();
    this.validateIdUser();
    this.userFacade.getRoles();
    this.roles$ = this.userFacade.loadRoles();
    this.susbcribeAlerts();
  }

  ngOnDestroy() {
    this.errorSuscription.unsubscribe();
  }

  validateIdUser() {
    this.idUser = parseInt(this.route.snapshot.params.id, 10);
    this.idUser ? this.configureEditInterface() : this.viewOption = 'create';
  }

  configureEditInterface() {
    this.viewOption = 'edit';
    this.infoModule.name = 'userModule.editUserComponent.name';
    this.infoModule.description = 'userModule.editUserComponent.description',
    this.userFacade.loadUser(this.idUser);
    this.userFacade.getUser(this.idUser).subscribe(
      (user) => {
        if (user) {
          this.userForm.patchValue(user);
        } else {
          this.router.navigate(['not-found']);
        }
      }
    );
    this.userForm.controls.password.setValidators([]);
    this.userForm.controls.cPassword.setValidators([]);
  }

  createForms() {
    this.userForm = this.formBuilder.group({
      // id: [''],
      customerId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      dniFile: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', [Validators.required]],
      department: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]],
      phone: ['', Validators.required],
      mobile: ['', Validators.required],
      business: ['', Validators.required],
      position: ['', Validators.required],
      comercialAddress: ['', Validators.required],
      anotherContactFullName: ['', Validators.required],
      anotherContactPhone: ['', Validators.required],
      anotherContactEmail: ['', Validators.required],
      observations: [''],
      image: ['', Validators.required],
      roleId: ['', Validators.required],
    });
  }

  setFormValue(attr: string, value: string) {
    this.userForm.controls[attr].setValue(value);
  }

  createUser() {
    if (this.userForm.valid) {
      if (this.viewOption === 'create') {
          this.authFacade.customerId$.subscribe(
            (customerId) => {
              console.log(this.userForm.value);
              delete this.userForm.value.cPassword;
              const newUser = {...this.userForm.value, customerId };
              this.userFacade.createUser(newUser);
            }
          );
      } else {
        this.userFacade.updateUser(this.userForm.value);
      }
    }
  }

  susbcribeAlerts() {
    this.error$ = this.userFacade.error$;
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
