import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private resto:TestService) { }
   collection:any=[];
  ngOnInit(): void {

    this.resto.getList().subscribe((result:any)=>
    {
      console.log("result",result)
      this.collection=result;
    })
  }

}
