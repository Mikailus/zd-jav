import { Component } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  public photos: Photo[] = [
    {
      id: 1,
      albumId: 1,
      title: 'Moj tytul',
      url: 'https://bi.im-g.pl/im/e3/12/14/z21048035IBG.jpg',
      likes: 0,
      unlikes: 0,
    },
    {
      id: 2,
      albumId: 2,
      title: 'Moj tytul 2',
      url: 'https://bi.im-g.pl/im/e3/12/14/z21048035IBG.jpg',
      likes: 0,
      unlikes: 0,
    },
    {
      id: 3,
      albumId: 3,
      title: 'Moj tytul 3',
      url: 'https://bi.im-g.pl/im/e3/12/14/z21048035IBG.jpg',
      likes: 0,
      unlikes: 0,
    },
  ];

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
}
