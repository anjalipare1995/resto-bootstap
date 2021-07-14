import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto: TestService) { }
  //all result in collection(all api data)
  //for print on html use table
  collection:any=[];

  ngOnInit(): void {
    // this.resto.getList();
    //get data from api using subscibe
    this.resto.getList().subscribe((result) => {
      console.log(result);


      this.collection = result;
    })

  }

  deleteResto(item: any) {
    this.resto.deleteResto(item).subscribe((result) => {
      console.log("result", result)
    })
    this.ngOnInit();

  }
}