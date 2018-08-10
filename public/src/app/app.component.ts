import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageFound = true;

  constructor(private router: Router){}

  ngOnInit(){
    if(this.router.url === '/'){
      this.pageFound = false;
      this.redirect();
    }
    else
      this.pageFound = true;
  }

  redirect(){
    setTimeout(()=>{
      this.router.navigate(['home']);
    }, 5000)
  }
}
