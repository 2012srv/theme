import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    this.document.querySelector('body').addEventListener('scroll', (e: any) => {
      if(e.target.scrollTop > 50) {
        this.document.querySelector('body').classList.add("scrolled");
      } else {
        this.document.querySelector('body').classList.remove("scrolled");
      }
      // this.keepTrack();
    });
  }
}
