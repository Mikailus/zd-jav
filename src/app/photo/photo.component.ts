import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() public photo: Photo = {} as Photo;
  @Output() public deletePhoto: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onDeleteClick(): void {
    this.deletePhoto.emit(this.photo.id);
  }
}
