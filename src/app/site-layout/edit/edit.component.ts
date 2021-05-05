import {AfterViewInit, Component, DoCheck, ElementRef, ViewChild} from '@angular/core';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements AfterViewInit, DoCheck {

  id: number;

  @ViewChild('edit') editRef: ElementRef;

  constructor(private noteServe: NoteService) { }

  ngAfterViewInit(): void {
    this.editRef.nativeElement.value = this.noteServe.noteList[this.id];
  }

  ngDoCheck(): void {
    this.id = this.noteServe.item;
  }

  update(id): void {
    this.noteServe.check(id);
    this.noteServe.candidate = this.editRef.nativeElement.value;
  }
}
