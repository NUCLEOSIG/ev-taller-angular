import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  
  constructor(private http:HttpClient) { 

  }

  getTecnico():Observable<any>{
    return this.http.get(`/api/taller/tecnicos`);
  }

  crearTecnico(tecnico:Object):Observable<any>{
    return this.http.post(`/api/taller/tecnicos`,tecnico);
  }

}
