// src/app/services/aves.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Importa map desde rxjs/operators
import { Recording } from '../models/recording.model';  // Importa la interfaz Recording

@Injectable({
  providedIn: 'root'
})
export class AvesService {
  private apiUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:guatemala';

  constructor(private http: HttpClient) {}

  getAves(): Observable<Recording[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        if (!response || !response.recordings) {
          throw new Error('La respuesta no contiene la propiedad recordings.');
        }

        return response.recordings.map((recording: any) => ({ // Aquí especificas el tipo de 'recording'
          id: recording.id,
          name: recording.en,
          family: `${recording.gen} ${recording.sp}`,
          location: recording.loc,
          discoverer: recording.rec,
          imageUrl: `https:${recording.sono.small}`, // Construir la URL de la imagen
        }));
      })
    );
  }
}
