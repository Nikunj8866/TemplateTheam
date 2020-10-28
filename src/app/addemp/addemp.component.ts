import { Component, OnInit } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  adddata(frm)
  {
     var obj =  new  FormData()
     obj.set("email",frm.value.email);
     obj.set("password",frm.value.password);
     this.http.post("http://localhost/demo/Pub_Ragistation.php",obj).subscribe(resp=>{

         var status  = resp[0];
         var finalstatus = status["status"];

         if(finalstatus == "success")
         {

           alert("success");

         }


     })



  }


}
