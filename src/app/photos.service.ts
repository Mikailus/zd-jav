import { HttpClient } from '@angular/common/http';
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
            };
          });
        }),
        tap((photos: Photo[]) => {
          this.photos = photos;
        })
      );
  }

  public getUpdatedPhotos(): Photo[] {
    return this.photos;
  }

  public deletePhoto(id: number): void {
    const filterFunction = function (photo: Photo) {
      return photo.id !== id;
    };

    this.photos = this.photos.filter(filterFunction);
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
