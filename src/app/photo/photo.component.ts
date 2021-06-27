import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Photo } from '../interfaces/photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() public photo: Photo = {} as Photo;
  @Output() public deletePhoto: EventEmitter<number> = new EventEmitter();
  @Output() public likePhoto: EventEmitter<number> = new EventEmitter();
  @Output() public unlikePhoto: EventEmitter<number> = new EventEmitter();

  @ViewChild('templateReference', { read: ElementRef })
  reference: ElementRef | null = null;

  public text = '';

  constructor() {
    // W konstruktorze nie ma jeszcze informacji z @Input oraz widoku
    console.log(
      this.photo?.id +
        ' ma wysokość ' +
        this.reference?.nativeElement?.offsetHeight
    );
  }

  ngOnInit(): void {
    // W hooku ngOnInit są już wartości w @Input, ale nie ma jeszcze informacji z widoku
    this.text =
      this.photo.id +
      ' ma wysokość ' +
      this.reference?.nativeElement?.offsetHeight;
  }

  ngOnDestroy(): void {
    // console.log(this.photo.id + ' destroyed');
  }

  ngAfterViewInit(): void {
    // W hooku ngAfterViewInit są już wartości w @Input oraz widoku
    console.log(
      this.photo.id +
        ' ma wysokość ' +
        this.reference?.nativeElement.offsetHeight
    );
  }

  public onDeleteClick(): void {
    this.deletePhoto.emit(this.photo.id);
  }

  public onLikeClick(): void {
    this.likePhoto.emit(this.photo.id);
  }

  public onUnlikeClick(): void {
    this.unlikePhoto.emit(this.photo.id);
  }
}
