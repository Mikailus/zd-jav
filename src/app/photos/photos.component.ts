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
  public minValue: number = 0;
  public maxValue: number = 100;
  private readonly pagination: number = 1000;

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

  public increasePagination(): void {
    // minValue === 4000
    // pagination === 1000
    // 5000, photos.length (=== 5000)
    // ostatni  indeks w photos === 4999
    if (this.minValue + this.pagination >= this.photos.length) {
      return;
    }

    this.minValue = this.minValue + this.pagination;
    this.maxValue = this.maxValue + this.pagination;
    // minValue = 5000
    // maxValue === 5100
  }

  public decreasePagination(): void {
    if (this.minValue === 0) {
      return;
    }

    this.minValue = this.minValue - this.pagination;
    this.maxValue = this.maxValue - this.pagination;
  }
}
