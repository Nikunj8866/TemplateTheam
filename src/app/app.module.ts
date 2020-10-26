import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from  '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { AddempComponent } from './addemp/addemp.component';
import { ContinerComponent } from './continer/continer.component';

const app :Routes = [{path:'',component:LoginComponent},{path:'login',component:LoginComponent},{path:'master',component:AppComponent,children:[{path:'addemp',component:AddempComponent}]},{path:'reg',component:RegComponent}]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    AddempComponent,
    ContinerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app)
  ],
  providers: [],
  bootstrap: [ContinerComponent]
})
export class AppModule { }
