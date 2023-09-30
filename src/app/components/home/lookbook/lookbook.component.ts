import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.css']
})
export class LookbookComponent implements OnInit {
  lookbooks = [
    {text: "Look book for her",
     img: "./assets/img/lookbook-women.jpg",
    path:'lookbook-women'},
    {text: "Look book for him",
     img: "./assets/img/lookbook-men.jpg",
     path:'lookbook-men'}
  ]

  photo = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1000px)']).subscribe((state:BreakpointState)=>{
      if (state.matches){
        this.photo = true
      }
      else{
        this.photo = false
      }
    })
  }


}
