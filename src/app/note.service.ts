import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteList = [];
  noteObj = {};
  candidate: string;
  item: number;
  flag = false;

  constructor() {
  }

  check(id): void {
   this.flag = true;
  }

  convertInObj(): any {
    this.noteObj = this.noteList.reduce(this.reducer, this.noteObj);
    localStorage.id = JSON.stringify(this.noteObj);
  }

  reducer(pre, item, ind): {} {
    return {...pre, [ind]: item};
  }

}
