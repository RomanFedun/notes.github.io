import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SiteLayoutComponent} from '../../site-layout.component';
import {NoteService} from '../../../note.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements AfterViewInit {

  @ViewChild('myInput') inputRef: ElementRef;
  inp = '';

  constructor(public siteLayout: SiteLayoutComponent,
              private noteServe: NoteService) { }

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
  }

  showToast(text): void {
    this.noteServe.noteList.unshift(this.inputRef.nativeElement.value);
    this.siteLayout.open(text);
    this.inputRef.nativeElement.value = '';
    this.inp = '';
    this.noteServe.convertInObj();
  }

  onInput(e): void {
    this.inp = e.target.value;
  }
}
