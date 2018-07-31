export class CourseNavigatorServiceClient {
  heroku_url = "https://cs5610-summer-2018-pat-ojas.herokuapp.com";
  local_url = "http://localhost:8080";
  findAllModulesForCourse(courseId) {
    return fetch("https://cs5610-summer-2018-pat-ojas.herokuapp.com/api/course/" + courseId + "/module").then(response => response.json());
  }
}
