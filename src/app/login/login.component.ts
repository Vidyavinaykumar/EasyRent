import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reqpwd:any;
  loginForm:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder, private router:Router){
    this.loginForm=fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  checkLogin(){
    this.reqpwd=this.loginForm.value.username.slice(0,3)+"@123";
    if(this.loginForm.value.username=="admin" && this.loginForm.value.password=="admin123"){
      Swal.fire({
        title: "Login Success",
        text: "Redirecting to Admin Dashboard",
        icon: "success"
      });
      localStorage.setItem("loggedin",JSON.stringify(this.loginForm.value))
      this.router.navigateByUrl("/admin/dashboard")
    }
    else if(this.reqpwd==this.loginForm.value.password){
      Swal.fire({
        title: "Login Success",
        text: "Redirecting to User Dashboard",
        icon: "success"
      });
      localStorage.setItem("loggedin",JSON.stringify(this.loginForm.value))
         this.router.navigateByUrl("/user/dashboard")
    }
    else{
      Swal.fire({
        title: "Login Failed",
        text: "username or password incorrect",
        icon: "error"
      });
    }
  }

}
