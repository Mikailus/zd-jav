import { Component, OnInit } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  public photos: Photo[] = [];
  public shouldShowPhotos: boolean = true;

  constructor(private photosService: PhotosService) {
    this.photosService.getPhotos().subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }

  public ngOnInit(): void {
    console.log('Init hook');
  }

  public togglePhotosVisibility(): void {
    this.shouldShowPhotos = !this.shouldShowPhotos;
  }

  public deletePhoto(id: number): void {
    this.photosService.deletePhoto(id);
    this.photos = this.photosService.getUpdatedPhotos();
  }

  public increasePhotoLike(id: number): void {
    this.photosService.increasePhotoLike(id);
    this.photos = this.photosService.getUpdatedPhotos();
  }

  public increasePhotoUnlike(id: number): void {
    this.photosService.increasePhotoUnlike(id);
    this.photos = this.photosService.getUpdatedPhotos();
  }
}
