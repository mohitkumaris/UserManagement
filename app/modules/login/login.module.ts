import {  NgModule } from "@angular/core";

import  { BrowserModule}  from '@angular/platform-browser'


import  { LoginComponent }  from './component/login.component'

@NgModule({
    declarations  : [LoginComponent],
    imports : [BrowserModule],
    providers : [],
    exports  : [LoginComponent],
})
export class LoginModule {
    
}