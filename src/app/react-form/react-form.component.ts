import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from  '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  constructor(private frmbuild:FormBuilder) { }
  
  frmtest:FormGroup;

  ngOnInit(): void {

     this.frmtest = this.frmbuild.group({
        firstName : ['dfdfdfd'],
        lastName : ['dfdfdf'],
        mobileNumber : [''],
        emailId :['']
     });

  }

  addForm()
  {
    console.log(this.frmtest.value.firstName);

    console.log(this.frmtest.controls.firstName.value)

  }

}
