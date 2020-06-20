import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  do() {
    if (navigator['share']) {
      navigator['share']({
          title: "Web Fundamentals",
          text: "Check out Web Fundamentals — it rocks!",
          url: "https://developers.google.com/web"
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    }
  }
}
