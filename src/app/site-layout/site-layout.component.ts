import { Component } from '@angular/core';

declare var $;

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {

  text: string;

  constructor() { }

  open(text): any {
    this.text = text;
    return $('.toast').toast('show');
  }
}
