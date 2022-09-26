import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  error$: Observable<any>;
  token: string;

  constructor(
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authFacade: AuthFacade
  ) {
      translate.setDefaultLang('en');
    }

  ngOnInit() {
    this.token = this.route.snapshot.params.token;
    if (!this.token) {
      this.router.navigate(['not-found']);
    }
    this.error$ = this.authFacade.error$;
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid &&
        this.changePasswordForm.controls.password.value === this.changePasswordForm.controls.cPassword.value ) {
        this.authFacade.changePassword({ token: this.token, ...this.changePasswordForm.value } );
    }
  }


}
