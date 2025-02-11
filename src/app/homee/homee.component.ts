import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // interpolation
  name="4arctic8"

  //proprty binding

  status=true
//toway databinding
search="hello"
  add(){
    console.log("salut 4arctic8")
  }

}
