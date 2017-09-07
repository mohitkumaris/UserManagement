import  { NgModule}  from  '@angular/core';


import  { modules } from  './import/appImport.modules'
import  { components}  from  './import/appImport.component'
import  { providers } from './import/appImport.providers'


import  { RootComponent }  from  './component/root.component'

@NgModule({
 
    imports : [modules],
    declarations : [components],
    providers : [providers],
    bootstrap  : [RootComponent]

})

export class AppModule {}