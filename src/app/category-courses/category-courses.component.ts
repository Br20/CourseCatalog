import { Component, inject } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../CatalogInterfaces';
import { ActivatedRoute } from '@angular/router';
import { CardCourseComponent } from '../card-course/card-course.component';

@Component({
  selector: 'app-category-courses',
  standalone: true,
  imports: [CardCourseComponent],
  template: `
    <section class="course-container">
      @for (course of courseList; track course.id){    
        
        <app-card-course [course]="course"/>

      }
    </section>
  `,
  styleUrl: './category-courses.component.css'
})
export class CategoryCoursesComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  courseService : CourseService = inject(CourseService);
  courseList : ICourse[] = [];
  constructor(){
    this.courseService.getCoursesByCategory(this.route.snapshot.params['id'])
    .then((courses)=> this.courseList = courses);
  }
}
