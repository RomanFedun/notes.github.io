import {AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NoteService} from '../../note.service';
import {SiteLayoutComponent} from '../site-layout.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit, DoCheck, AfterViewInit {

  text: string;
  list = [];
  item: number;
  localStr: {};
  @ViewChild('exampleModal') modalRef: ElementRef;

  constructor(public modal: NgbModal,
              public noteServe: NoteService,
              public siteLayout: SiteLayoutComponent) {
    if (localStorage.id) {
      this.localStr = JSON.parse(localStorage.id);
      // tslint:disable-next-line:forin
      for (const prop in this.localStr) {
        this.list[prop] = this.localStr[prop];
      }
    } else {
      return;
    }
  }

  ngOnInit(): any {
    this.noteServe.noteList = this.list;
  }

  ngDoCheck(): void {
    this.list = this.noteServe.noteList;
  }

  ngAfterViewInit(): void {
    if (this.noteServe.flag) {
      this.open('save changes', this.noteServe.item);
      this.noteServe.flag = false;
    }
  }

  open(text, id): void {
    this.item = id;
    this.text = text;
    this.modal.open(this.modalRef).result
     .then(() => {
     }, () => {
     } );
  }

  method(): void {
    if (this.text === 'delete') {
      this.list.splice(this.item, 1);
      this.noteServe.noteObj = {};
      this.modal.dismissAll();
      this.noteServe.convertInObj();
    } else if (this.text === 'save changes') {
      this.noteServe.noteList[this.item] = this.noteServe.candidate;
      this.noteServe.noteObj = {};
      this.modal.dismissAll();
      this.siteLayout.open('note was updated');
      this.noteServe.convertInObj();
    }
  }

  addId(id): void {
    this.noteServe.item = id;
  }
}
