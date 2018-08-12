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

  constructor(){}

  ngOnInit(){
    this.letters = "abcdefghijklmnopqrstuvwxyz";
    this.notes = "ABCDEFG"
  }

  toNotes(str){
    let newStr = '';
    for(let x of newStr){
      console.log(this.letters.indexOf(x));
  }
  }
}
