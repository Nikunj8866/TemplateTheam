import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,FormArray} from  '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  constructor(private frmbuild:FormBuilder) { }
  submitted = false;
  frmtest:FormGroup;
  langarr :Array<any>= [
    {name:'English', value:'English',checked:false},
    {name:'Hindi', value:'Hindi',checked:false},
    {name:'Gujarati', value:'Gujarati',checked:false},
    {name:'Bangali', value:'Bangali',checked:false},
    {name:'Panjabi', value:'Panjabi',checked:false},
    {name:'Marathi', value:'Marathi',checked:false},
    {name:'Telugu', value:'Telugu',checked:false},
    {name:'Tamil', value:'Tamil',checked:false},
    {name:'Kannad', value:'Kannad',checked:false},
    {name:'Oria', value:'Oria',checked:false},
    {name:'Urdu', value:'Urdu',checked:false},
    
  ];

  ngOnInit(): void {

     this.frmtest = this.frmbuild.group({
        firstName : ['',Validators.required],
        lastName : ['',Validators.required],
        mobileNumber : ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        emailId :['',[Validators.required,Validators.email]],
        gender :['',Validators.required],
        checkArray : this.frmbuild.array([],Validators.required)
     });

  }
  onCheckboxChange(e)
  {
    const checkArray: FormArray = this.frmtest.get('checkArray') as FormArray;
  
      if (e.target.checked){
        checkArray.push(new FormControl(e.target.value));
      }else{
        let i: number = 0;
        checkArray.controls.forEach((item: FormControl) => {
          if(item.value == e.target.value){
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      
      }

  }
  addForm()
  {

    if(this.frmtest.invalid)
    {
      this.submitted = true;
      return;
    }
    console.log(this.frmtest.value.firstName);

    console.log(this.frmtest.controls.firstName.value)

  }
  get fname(){
    return this.frmtest.get('firstName');
  }

  get lname(){
    return this.frmtest.get('lastName');
  }

  get email(){
    return this.frmtest.get('emailId');
  }

  

  get mobno(){
    return this.frmtest.get('mobileNumber');
  }
  get gender(){

    return this.frmtest.get('gender');

  }

}
