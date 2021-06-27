import { Component } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';
import { photos, getPhotos } from '../const/photos.const';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  public photos: Photo[] = getPhotos();

  public shouldShowPhotos: boolean = true;

  public togglePhotosVisibility(): void {
    this.shouldShowPhotos = !this.shouldShowPhotos;
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

  public refreshList(): void {
    this.photos = getPhotos();
  }
}
