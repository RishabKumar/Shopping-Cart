import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output()
  linkSelectedEvent = new EventEmitter<string>();

  onLinkSelected(link:string)
  {
    this.linkSelectedEvent.emit(link);
  }

  ngOnInit() {
  }

}
