import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <app-header></app-header>
    
    <!-- Routes get injected here  -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('https://api.github.com/users?per_page=10')
      .subscribe(data => {
        console.log(data);
      });
  }

}
