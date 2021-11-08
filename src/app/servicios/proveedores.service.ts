import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs-compat';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  presURL = 'https://appcompras-89748-default-rtdb.europe-west1.firebasedatabase.app/proveedores.json';
  preURL = 'https://appcompras-89748-default-rtdb.europe-west1.firebasedatabase.app/proveedores';

  
  constructor(private http : HttpClient,
    private db : AngularFireDatabase) { }

    postProveedor(proveedor : any){
      const newpres = JSON.stringify(proveedor);
      const headers = new HttpHeaders({
        'Content-Type' : 'application/json'
      });
      return this.http.post(this.presURL, newpres, {headers}).pipe(
        map(res => {
          console.log(res);
          return res;
        })
      )
    }

    getProveedores (){
      return this.http.get(this.presURL)
      .pipe(map(res => res));

    }

    getProveedor (id$ : string){
      const url = `${ this.preURL}/${id$}.json`;
      return this.http.get( url )
      .pipe(map(res => 
        JSON.stringify(res)));
    }

    putProveedor( proveedor: any, id$: string){
      const newpre = JSON.stringify(proveedor);

      const url = `${this.preURL}/${ id$ }.json`;
      return this.http.put( url, newpre, {headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Acces-Control-Allow-Headers', 'Content-Type')})
      .pipe(map( res => {
        console.log(res);
        return res;
      }))
    }

    delProveedor ( id$ : string ) {
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.delete(url)
      .map(res => res);
    }
  
}
