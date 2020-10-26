import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rou:Router) { }

  ngOnInit(): void {

  }

  gotodeshboard(){

     this.rou.navigateByUrl('master');

  }
}
