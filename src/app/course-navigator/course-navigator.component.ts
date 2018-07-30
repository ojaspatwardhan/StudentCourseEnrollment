import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];

  modules = [];

  constructor(private service: CourseServiceClient) { }

  ngOnInit() {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

}
