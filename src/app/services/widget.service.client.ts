export class WidgetServiceClient {
  heroku_url = "https://cs5610-summer-2018-pat-ojas.herokuapp.com";
  local_url = "http://localhost:8080";
  findWidgetsForLesson(lessonId) {
    return fetch("https://cs5610-summer-2018-pat-ojas.herokuapp.com/api/widget/" + lessonId)
      .then(response => response.json());
  }
}
