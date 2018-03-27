import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Made with love by Roberto</p>
      </div> 
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
