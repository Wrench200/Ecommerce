
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  title = 'SignUp';

  signupForm!: FormGroup
  saveError: string = ''

  constructor(
    private formbuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) { }



  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/),
      ]),
    })
  }
  onSubmit(): void {

    const save = this.authservice.register(this.signupForm.value);
    if (!save.error) {

      localStorage.setItem('auth', JSON.stringify(save.data))
      this.router.navigate(['home'], {

        queryParams: { id: save.data?.id }
      })
    } else {

      this.saveError = save.message
    }
  }


}
