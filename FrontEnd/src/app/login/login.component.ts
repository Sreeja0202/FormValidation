import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { ValidationService } from '../validation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public signupForm!: FormGroup;
  showModal: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        fname: [
          '',
          [
            Validators.required,
            Validators.pattern('^[A-Za-z]+[ .]?[A-Za-z .]*'),
          ],
        ],
        femail: ['', [Validators.required, Validators.email]],
        fpassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      (err: string | number) => {
        console.log('Some Error occured', +err);
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
