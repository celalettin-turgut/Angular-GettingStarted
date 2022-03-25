import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  imageUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  params!:HttpParams
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) {
      this.params = new HttpParams()
  }

  getImages(): Observable<Image[]> {
      console.log('params',this.params)
    return this.http.get<Image[]>(this.imageUrl);
  }

  getImagesById(id: number) {
    return this.http.get<Image>(`${this.imageUrl}/${id}`).pipe(
      tap(() => console.log(`fetched photo id=${id}`)),
      catchError(this.handleError())
    );
  }
}
