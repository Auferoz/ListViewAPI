import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { Character } from '@shared/interfaces/character.interface';
import { environment } from '@environment/environment';
import { TrackHttpError } from '@shared/models/trackHttpError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class CharacterService {

  constructor(private http: HttpClient) {}

  searchCharacters(query = '', page = 0, list = '7113210', api_key = '457643c75832b5d6f6c66e10f260618b'):Observable<Character[] | TrackHttpError> {
    const filter = `${environment.baseUrlAPI}/4/list/${list}?api_key=${api_key}`;
    console.log(filter);
    return this.http.get<Character[]>(filter)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseUrlAPI}/3/tv/${id}?api_key=457643c75832b5d6f6c66e10f260618b`)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  private handleHttpError( error:HttpErrorResponse ):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}
