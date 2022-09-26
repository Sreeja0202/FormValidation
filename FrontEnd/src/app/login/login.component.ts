import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { ValidationService } from '../validation.service';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public signupForm!: FormGroup;
  public loginForm!: FormGroup;
  showModal: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        fname: ['', [Validators.required]],
        femail: ['', [Validators.required, Validators.email]],
        fpassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      (err: string | number) => {
        console.log('Some Error occured', +err);
      }
    );

    this.loginForm = this.fb.group(
      {
        femail: ['', [Validators.required, Validators.email]],
        fpassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      (err: string | number) => {
        console.log('Some Error Occured', +err);
      }
    );
  }

  logIn() {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          console.log(a);
          console.log(this.loginForm.value.femail);
          return (
            a.femail === this.loginForm.value.femail &&
            a.fpassword === this.loginForm.value.fpassword
          );
        });
        if (user) {
          alert('Login Successfull!!!');
          this.loginForm.reset();
        } else {
          alert('User not Found');
        }
      },
      (err) => {
        alert('Some error occured');
        console.log(err);
      }
    );
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/users', this.signupForm.value)
      .subscribe((res) => {
        console.log(res);
        alert('Signup successfull');
        this.onCloseModal();
      });
  }

  onAddUser() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
  }
}
