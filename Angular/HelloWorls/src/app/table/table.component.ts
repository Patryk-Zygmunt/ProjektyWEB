import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  arr1 =["Ala","ma","kota"];
  arr2 = [1,2,3,4,5,6,7];

  zipped = [];


  zip(a1,a2){
    return a1.map(v1=>
      a2.map(v2=> v1 + v2))
  }

  zipOf(a1,a2) {
    let tmp = []
    for (let v1 of a1) {
      for (let v2 of a2) {
        tmp.push(v1 + v2)
      }
    }
    return tmp
  }


  zipIn(a1,a2) {
    let tmp = []
    for (let v1 in a1) {
      for (let v2 in a2) {
        tmp.push(a1[v1] + a2[v2])
      }
    }
    return tmp
  }



  zipAct(fun:((a1:any[],a2:any[])=>any[])){
      this.zipped = []
    this.zipped = fun(this.arr1,this.arr2);

  }


  constructor() { }

  ngOnInit() {
  }

}
