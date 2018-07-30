import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-two',
  templateUrl: './hello-world-two.component.html',
  styleUrls: ['./hello-world-two.component.css']
})
export class HelloWorldTwoComponent implements OnInit {

  message = "Hello World Two Component!"
  courseTitle;

  courses = [
    {title: "Course 1", id: 1},
    {title: "Course 2", id: 2},
    {title: "Course 3", id: 3},
  ]

  addCourse(title) {
    this.courses.push({
      title: title,
      id: 4
    });
    this.courseTitle = "";
  }

  deleteCourse(courseId) {
    alert(courseId)
    this.courses = this.courses.filter(course =>
      course.id !== courseId
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
