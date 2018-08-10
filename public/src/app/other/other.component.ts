import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
name:any;
melody:any;
letters:any;
notes:any;

  constructor(){
    this.letters = "abcdefghijklmnopqrstuvwxyz";
    this.notes = "abcdefg"
  }

  ngOnInit() {
  }
  
  toNotes(){
    return "gay";
  }
}
