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

}
