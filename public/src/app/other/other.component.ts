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
    this.melody = "Output"
    this.name = "Input"
  }
  
  toNotes(str){
    let newStr = '';
    for(let x of str){
      newStr += this.notes[this.letters.indexOf(x.toLowerCase()) % this.notes.length] + " ";
    }

    this.melody = newStr;
  }
}
