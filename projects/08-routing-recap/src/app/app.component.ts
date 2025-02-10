import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` 
    <h1>Welcome to {{ title }}!</h1> 
    <router-outlet />
    @for (product of productTitles; track product) {
      <div class="listing">
        <h2>{{ product }}</h2>
        <a [routerLink]="['/details', $index]">View Details</a>
      </div>
    }
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
