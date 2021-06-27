import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() public photo: Photo = {} as Photo;

  constructor() {}

  ngOnInit(): void {}
}
