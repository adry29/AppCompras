import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';
import { ApresComponent } from './presupuestos/apres/apres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { EditproveeComponent } from './proveedores/editprovee/editprovee.component';



const routes : Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent, canActivate : [GuardService]},
  {path: 'addpres', component : ApresComponent, canActivate : [GuardService]},
  {path: 'editpres/:id', component: EditpresComponent, canActivate : [GuardService]},
  {path: 'presupuestos', component : PresupuestosComponent, canActivate : [GuardService]},
  {path: 'addprovee', component : AddproveeComponent, canActivate : [GuardService]},
  {path : 'editprovee/:id', component : EditproveeComponent, canActivate: [GuardService]},
  {path: 'registro', component : RegistroComponent},
  {path: 'iniciosesion', component : InisesComponent},
  { path: '**', component: InicioComponent}
]

@NgModule({

  

  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    ApresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    EditproveeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
    
  ],
  providers: [ProveedoresService,
  AddproveeComponent,
  PresupuestosService,
  AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
