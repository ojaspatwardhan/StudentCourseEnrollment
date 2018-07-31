export class CourseServiceClient {
  heroku_url = "https://cs5610-summer-2018-pat-ojas.herokuapp.com";
  local_url = "http://localhost:8080";
  findAllCourses() {
  return fetch("https://cs5610-summer-2018-pat-ojas.herokuapp.com/api/course").then(response => response.json())
  }

  findCourseById(courseId) {
    return fetch("https://cs5610-summer-2018-pat-ojas.herokuapp.com/api/course/" + courseId)
    .then(response => response.json());
  }
}
