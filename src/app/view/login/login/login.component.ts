import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

// facade patter
import { ConfigAppFacade } from '../../../view/layout/state/configApp.facade';

// rxjs
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginStatus: boolean = null;
  isLoggedIn$: Observable<boolean>;
  emailControl: AbstractControl;
  passwordControl: AbstractControl;
  loading$: Observable<boolean>;

  constructor(
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private configAppFacade: ConfigAppFacade,
    private authFacade: AuthFacade
  ) {
      translate.setDefaultLang('en');
    }

  ngOnInit() {
    this.createLoginForm();
    this.loadState();
  }

  loadState() {
    this.loading$ = this.configAppFacade.loadingConfig$;
    this.isLoggedIn$ = this.authFacade.isLoggedIn$;
    this.isLoggedIn$.subscribe(
      (res) => res === true ? this.redirect('dashboard') : this.redirect('login')
    );
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.emailControl = this.getFormControls('email');
    this.passwordControl = this.getFormControls('password');
  }

  getFormControls( attr: string) {
    return this.loginForm.controls[`${attr}`];
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.configAppFacade.showLoading();
      this.authFacade.login(this.loginForm.value);
      this.configAppFacade.hideLoading();
    }
  }

  passwordReset() {
    this.router.navigate(['password-reset']);
  }


  redirect(path) {
    this.router.navigate([path]);
  }
}
