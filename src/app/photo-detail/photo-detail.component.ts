import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../interfaces/photo.interface';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
})
export class PhotoDetailComponent implements OnInit {
  public id: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.photosService.getPhotoById(this.id).subscribe((photo: Photo) => {
      console.log(photo);
    });
  }
}
