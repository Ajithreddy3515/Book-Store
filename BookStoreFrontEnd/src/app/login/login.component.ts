import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: any;
  Password: any;
  errormessage: string='';
  

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router,
  
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {

    if(loginForm.value.userName===''|| loginForm.value.userName===null)
    {
        this._snackBar.open("Email is required.",'Ok',{duration:3000})
        return
    }
    if(loginForm.value.userPassword===''|| loginForm.value.userPassword===null)
    {
        this._snackBar.open("Password is required.",'Ok',{duration:3000})
        return
    }

 //  this.errormessage = '';
//const body: any = {
  //"emailID": this.email,
  //"password": this.Password
//}

  //this.userService.userSignIn(body).pipe(take(1)).subscribe((res: any) => {
    // console.log("********", res);
    //if (res && res?.userId) {
      //alert("Login successful");
      //if (res?.role) {
        //this.userService.storeUserRole(res?.role);
      //}
      //this.userService.storeUserAuthorization(res?.userId);
      //let userName = '';
     // if (res?.firstName) {
        //userName = res?.firstName;
      //}
      //if (res?.lastName) {
        //userName += ' ' + res?.lastName;
      //}
      //this.userService.storeUserName(userName);
      //console.log(">>>>>>>", res?.role);
      //if (res?.role === 'admin') {
        //this.router.navigate(['/admin/home']);
      //} else {
        //this.router.navigate(['/user/home']);
      //}
    //}
  //}, err => {
    //console.log("Error ", err);
    
    //if (err?.error && err?.error.startsWith("Customer not found with")) {
      //alert("Customer email/password is invalid");
    //} else {
      //alert("Something going wrong in login! pls try again");
    //}
  //});
  //}

  this.userService.login(loginForm.value).subscribe(
    (response: any) => {
      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);

      const role = response.user.role[0].roleName;

      
      if (role === 'Admin') {
     
      // Swal.fire({
      //   title: 'Admin Login Successful',
      //   icon: 'success',
      //   showClass: {
      //     popup: 'animate__animated animate__fadeInDown'

      //   },
      //   hideClass: {
      //     popup: 'animate__animated animate__fadeOutUp'
      //   }
      // })
        
      this.router.navigate(['']);
    
      } else {
        //           Swal.fire({
        //   title: 'Login Successful',
        //   icon: 'success',
        //   showClass: {
        //     popup: 'animate__animated animate__fadeInDown'

        //   },
        //   hideClass: {
        //     popup: 'animate__animated animate__fadeOutUp'
        //   }
        // })
          
        this.router.navigate(['']);
      }
    },
    (error) => {Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid username or password. Try Again!',
    
    })
      console.log(error);
    }
  );
}

registerUser() {
  this.router.navigate(['/register']);
}
}