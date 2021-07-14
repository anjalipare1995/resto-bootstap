import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
//alert:boolean=false
 
  msg:string="";

    constructor(private router:Router, private cookie :CookieService) { }

  formlogin:any={
    username:'',
    password:''
  }

  login():any
  {
    console.log(this.formlogin);
      if(("anjali"===this.formlogin.username) && ("Anjali@123"===this.formlogin.password))
      { 
      // for local storage token gen
      // localStorage.setItem('token',this.formlogin.username)
       
      //(token gen in cookie..)
        this.cookie.set('token',this.formlogin.username)
       this.router.navigate(['/home']);
      }  
      else
      {
        this.msg="sorry! incorrect username or password";
          
        
        this.router.navigate(['/login']);
            
  
      }
     
     // this.alert=true;

  }
  
  // closeAlert()
  // {
  //   this.alert=false;
  // }
}
