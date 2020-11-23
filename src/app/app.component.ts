import { Component,OnInit,Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'templateIntigration';
  url = "assets/js/common.js";
  emailId ="";
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService ){


  }

ngOnInit(){

  this.loadScript();
  var arr  = this.storage.get("UserInfo");
  this.emailId= arr[0].admin_email_id;


   
}


  loadScript(){

  console.log("prepared ...");
  let node  = document.createElement("script");
  node.src = this.url;
  node.type  = "text/javascript";
  node.async  = true;
  node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);

  }
}
