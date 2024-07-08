import { Injectable } from '@angular/core';
import { ICategory, ICourse } from './CatalogInterfaces';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url : string = 'http://localhost:3050/';
  courses : ICourse[] = [];
  categories : ICategory[] = [];
  constructor() { }
  async getAllCourses(): Promise<ICourse[]>{
    fetch(this.url+'courses')
    .then((res) => res.json())
    .then((jsonData) => this.courses = jsonData)
    .catch((err) => {
      console.log(err)
      this.courses = []
    })
    return new Promise((resolve) => {
        setTimeout(()=> {
          resolve(this.courses)
        },100)
      });
  }

  async getCourseById(id : number): Promise<ICourse>{
    let singleCourse : ICourse;
    console.log(id);
    fetch(this.url+'courses/'+id.toString())
    .then((res) => res.json())
    .then((jsonData) => singleCourse = jsonData)
    .catch((err) => {
      console.log(err)
    })
    return new Promise((resolve) => {
        setTimeout(()=> {
          resolve(singleCourse)
        },100)
      });
    }

    async getAllCategories(): Promise<ICategory[]>{
      fetch(this.url+'categories/')
      .then((res) => res.json())
      .then((jsonData) => this.categories = jsonData)
      .catch((err) => {
        console.log(err)
        this.courses = []
      })
      return new Promise((resolve) => {
          setTimeout(()=> {
            resolve(this.categories)
          },100)
        });
    }

    async getCoursesByCategory(categoryId : number): Promise<ICourse[]>{
      let coursesByCat : ICourse[] = [];
      fetch(this.url+'courses')
      .then((res) => res.json())
      .then((jsonData) => coursesByCat = jsonData.filter((course : ICourse)=> Number(course.category.id) == categoryId))
      .catch((err) => {
        console.log(err)
        coursesByCat = []
      })
      return new Promise((resolve) => {
          setTimeout(()=> {
            resolve(coursesByCat)
          },100)
        });
    }

}

