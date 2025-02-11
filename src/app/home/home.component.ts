import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //interpolation
  name="4 ARCTIC 8"

  //proprty binding
  status=false

  //event binding
  add(){
    console.log('salut 4 arctic 8')
  }

}
