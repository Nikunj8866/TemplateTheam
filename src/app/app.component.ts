import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'templateIntigration';
  url = "assets/js/common.js";

ngOnInit(){

  this.loadScript();
   
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
