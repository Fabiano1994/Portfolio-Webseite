import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.scss']
})
export class AHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  mobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.remove('d-none');
  }

  closeMobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('d-none');
  }

  openHome() { 
    this.closeMobileNavbar();
  }

  openAbout() { 
    this.closeMobileNavbar();
  }

  openProjects() {
    this.closeMobileNavbar();
  }

  openContact() {
    this.closeMobileNavbar();
  }

}
