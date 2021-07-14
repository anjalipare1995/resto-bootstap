//1 httpClient import   also import in app.module
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
//2 url
  url="http://localhost:3000/restaurants"

  rootUrl="http://localhost:3000/"
  //3 instance
  constructor(private http:HttpClient,private cookie:CookieService) { }
//this method for login form
   commingData(data:any)
   {
      console.log(data); 
   }
  //restaurent
   getList()
 { 
 // console.log("this is my list data");
 //4 get th api data here   
 return this.http.get(this.url); 
}
  //data from form
  saveResto(data:any)
  {
   //console.log("service",data);
  return this.http.post(`${this.rootUrl}restaurants`,data);
  }
   

  deleteResto(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  //get data on edit form
  getCurrentResto(id:any )
  {
    return this.http.get(`${this.url}/${id}`)
  }
//after update button data goes in api list and table
  updateResto(id:any,data:any)
  {
  return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data:any)
  {
return this.http.post(this.rootUrl+"users",data)

  }
     getToken()
     {
//        return !!localStorage.getItem('token')
       return !!this.cookie.get('token');
     }   
     getTokenInterceptor()
     {
       //return localStorage.getItem('token')
       return this.cookie.get('token')
     }

}
