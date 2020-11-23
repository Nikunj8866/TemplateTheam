import { Component, OnInit,Inject } from '@angular/core';
import {Router} from  '@angular/router';
import {HttpClient} from '@angular/common/http'
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rou:Router,private http:HttpClient,@Inject(SESSION_STORAGE) private storage: StorageService) { }
   arrdata  = new Array<any>();

  ngOnInit(): void {

  }

  gotodeshboard(){

   

  }
  login(frm){
    var email  = frm.value.Email;
    var password = frm.value.Password;
      this.http.get("http://localhost/demo/login.php?Email="+email+"&Password="+password).subscribe(resp=>{
          
          this.arrdata = <[]>resp
         console.log(this.arrdata);
         if(this.arrdata.length == 1)
         {

           this.storage.set("UserInfo",this.arrdata);

              this.rou.navigateByUrl('master');
         }
         else
         {
            alert("Invalid user name and password")

         }



      })


  }
}
