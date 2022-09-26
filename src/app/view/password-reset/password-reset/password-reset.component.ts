import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  resetForm: FormGroup;
  emailControl: AbstractControl;
  error$: Observable<any>;

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
    this.error$ = this.authFacade.error$;
    this.createForm();
  }

  createForm() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.emailControl = this.resetForm.controls.email;
  }

  onSubmit() {
    if (this.emailControl.valid) {
          this.authFacade.recoverPassword(this.resetForm.controls.email.value);
    }
  }

}
