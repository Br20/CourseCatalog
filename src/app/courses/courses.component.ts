import { Component, inject } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../CatalogInterfaces';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  template: `
    <h1>
      course list works!
    </h1>
  `,
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseService : CourseService = inject(CourseService);
  courseList : ICourse[] = [];
  courseFilteredList : ICourse[] = []; 
  constructor(){
    this.courseService.getAllCourses()
    .then((courses : ICourse[])=>  console.log(courses))
  }
}
