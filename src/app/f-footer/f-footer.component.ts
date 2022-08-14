import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-footer',
  templateUrl: './f-footer.component.html',
  styleUrls: ['./f-footer.component.scss']
})
export class FFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openImprint() {
    document.getElementById('imprint').classList.remove("d-none");
  }

  closeImprint() {
    document.getElementById('imprint').classList.add("d-none");
  }

  openPrivacy() {
    document.getElementById('privacy').classList.remove("d-none");
  }

  closePrivacy() {
    document.getElementById('privacy').classList.add("d-none");
  }

}
