import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { PopularesComponent } from './populares/populares.component';
import { DescargadosComponent } from './descargados/descargados.component';
import { ProximamenteComponent } from './proximamente/proximamente.component';
import { AgregarComponent } from './agregar/agregar.component';
import { LoginComponent } from './login/login.component';
import { DataServices } from './data.services';
import {HttpClientModule} from '@angular/common/http';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes:Routes=[
  {path:'registro', component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path:'populares', component:PopularesComponent},
  {path:'descargados', component:DescargadosComponent},
  {path:'proximamente', component:ProximamenteComponent},
  {path:'agregar', component:AgregarComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PopularesComponent,
    DescargadosComponent,
    ProximamenteComponent,
    AgregarComponent,
    LoginComponent,
    TarjetasComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
