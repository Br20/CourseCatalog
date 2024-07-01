import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryCoursesComponent } from './category-courses/category-courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: '| Home'},
    { path: 'category/:id', component : CategoryCoursesComponent, title : ' | Courses by ...'},
    { path: 'courses', component : CoursesComponent, title : ' | Courses'},
    { path: 'course/:id', component : CourseDetailComponent, title : ' | Details of course'},
];
