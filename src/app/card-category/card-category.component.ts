import { Component, Input } from '@angular/core';
import { ICategory } from '../CatalogInterfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="card" [routerLink]="['/category', category.id]">
      <img src="{{ category.img }}" alt="{{ category.name }}">
      <div class="card-body">
        <h3 class="card-title">{{ category.name }}</h3>
        <p class="card-text">Amount of courses: {{ category.amount_courses }}</p>
      </div>
    </div>
  `,
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {
  @Input() category! : ICategory;
}
