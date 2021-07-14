import { Component, OnInit } from '@angular/core';
// 1 for form in html
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert:boolean=false;
   
  //2
  AddResto=new FormGroup({
    //form control means name,address,email
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    //Date:new FormControl(''),
      
   date:new FormControl(Date())
  })
  

  constructor(private resto:TestService,private route:Router) { }

  ngOnInit(): void {
  }
   //3 use method with ngSubmit in html and define here
  collectResto()
   {//3
     console.log(this.AddResto.value)
      
       this.resto.saveResto(this.AddResto.value).subscribe((result)=>
       {
              console.log("result is here",result);
              this.alert=true;
              //reset form after fill
              this.AddResto.reset({})
              this.route.navigate(['/list'])
       })
      

   }
   closeAlert()
   {
     this.alert=false;
   }

}
