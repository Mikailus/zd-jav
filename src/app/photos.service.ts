import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Photo } from './interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private photos: Photo[] = [];

  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((photos: Photo[]) => {
          return photos.map((photo: Photo) => {
            return {
              ...photo,
              likes: 0,
              unlikes: 0,
              creationDate: new Date(),
            };
          });
        }),
        // map((photos: Photo[]) => {
        //   return photos.slice(0, 350);
        // }),
        tap((photos: Photo[]) => {
          this.photos = photos;
        })
      );
  }

  public getPhotoById(photoId: string): Observable<Photo> {
    // this.http.get('https://jsonplaceholder.typicode.com/photos' + '/' + photoId);
    return this.http.get<Photo>(
      `https://jsonplaceholder.typicode.com/photos/${photoId}`
    );
  }

  public getUpdatedPhotos(): Photo[] {
    return this.photos;
  }

  public deletePhoto(id: number): void {
    const filterFunction = function (photo: Photo) {
      return photo.id !== id;
    };

    this.http
      .delete('https://jsonplaceholder.typicode.com/photos' + '/' + id)
      .subscribe();

    this.photos = this.photos.filter(filterFunction);
  }

  public updatePhoto(photo: Photo): void {
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };

    this.http
      .put(
        'https://jsonplaceholder.typicode.com/photos' + '/' + photo.id,
        photo,
        options
      )
      .subscribe();
  }

  public increasePhotoLike(id: number): void {
    const increaseFunction = function (photo: Photo) {
      if (id === photo.id) {
        photo.likes = photo.likes + 1;
      }

      return photo;
    };

    this.photos = this.photos.map(increaseFunction);
  }

  public increasePhotoUnlike(id: number): void {
    const increaseFunction = function (photo: Photo) {
      if (id === photo.id) {
        photo.unlikes = photo.unlikes + 1;
      }

      return photo;
    };

    this.photos = this.photos.map(increaseFunction);
  }
}
