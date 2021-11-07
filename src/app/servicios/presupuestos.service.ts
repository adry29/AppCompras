import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs-compat';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class PresupuestosService {
  presURL = 'https://appcompras-89748-default-rtdb.europe-west1.firebasedatabase.app/presupuestos.json';
  preURL = 'https://appcompras-89748-default-rtdb.europe-west1.firebasedatabase.app/presupuestos';
  
  constructor(private http: HttpClient,
    private db : AngularFireDatabase) {}

  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    return this.http.post(this.presURL, newpres, {headers}).pipe(
      map( res => {
        console.log(res);
        return res;
      })
    )
    }

    getPresupuestos () {
      return this.http.get(this.presURL)
      .pipe(map(res => res));
      

      }
      
    
    getPresupuesto ( id$ : string ){
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.get( url ).pipe(
      map( res => JSON.stringify(res)));
      }
      putPresupuesto( presupuesto: any, id$: string) {
        const newpre = JSON.stringify(presupuesto);
    
        const url = `${ this.preURL }/${ id$ }.json`;
        return this.http.put( url, newpre,{headers: new HttpHeaders().set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Headers', 'Content-Type')}).pipe(
        map( res => {
        console.log(res);
        return res;
        }))
        }
    
        delPresupuesto ( id$: string ) {
          const url = `${ this.preURL }/${ id$ }.json`;
          return this.http.delete( url )
          .map( res => res);
          }


}
