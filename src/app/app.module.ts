import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RouterModule,Routes} from  '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { AddempComponent } from './addemp/addemp.component';
import { ContinerComponent } from './continer/continer.component';
import { ReactFormComponent } from './react-form/react-form.component';

const app :Routes = [{path:'',component:LoginComponent},{path:'login',component:LoginComponent},{path:'master',component:AppComponent,children:[{path:'reactive',component :ReactFormComponent},{path:'',component:AddempComponent},{path:'addemp',component:AddempComponent}]},{path:'reg',component:RegComponent}]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    AddempComponent,
    ContinerComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ContinerComponent]
})
export class AppModule { }
