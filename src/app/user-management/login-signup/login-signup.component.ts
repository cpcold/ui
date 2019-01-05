import { Component,OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {
                 
  }
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
   
    this.authService.createUser(
      form.value.name,
      form.value.gender,
      form.value.contact,
      form.value.email, 
      form.value.password);
  }
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.email, form.value.password);
  }

}

