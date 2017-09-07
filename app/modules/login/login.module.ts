import {  NgModule } from "@angular/core";

import  { BrowserModule}  from '@angular/platform-browser'


import  { LoginComponent }  from './component/login.component'

@NgModule({
    delecations  : [LoginComponent],
    import : [BrowserModule],
    providers : [],
    export  : [LoginComponent],
})
export class LoginModule {
    
}