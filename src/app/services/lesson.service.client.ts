export class LessonServiceClient {
  heroku_url = "https://cs5610-summer-2018-pat-ojas.herokuapp.com";
  local_url = "http://localhost:8080";
  findAllLessonsForModule(moduleId) {
    return fetch("https://cs5610-summer-2018-pat-ojas.herokuapp.com/api/module/" + moduleId + "/lesson")
    .then(response => response.json());
  }
}
