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
regex:any;

  constructor(){}

  ngOnInit(){
    this.letters = "abcdefghijklmnopqrstuvwxyz";
    this.notes = "ABCDEFG";
    this.melody = "Output";
    this.name = "Input";
    this.regex = "/^[^a-zA-Z]*$/";
  }
  
  toNotes(str){
    let newStr = '';
    if (!/^[a-zA-Z\s]*$/.test(str)){
      this.melody = "Invalid characters. Letters and spaces only. Thank you.";
    }
    else{
      for(let x of str){
        if(x != ' ')
          newStr += this.notes[this.letters.indexOf(x.toLowerCase()) % this.notes.length] + " ";
      }

      this.melody = newStr;
    }
  }
}
