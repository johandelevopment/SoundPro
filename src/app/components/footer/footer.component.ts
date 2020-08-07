import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(module) {
    switch (module) {
      case 1:
        this.router.navigate(["/home"]);
        break;
      case 2:
        this.router.navigate(["/home"]).then(()=>{
          this.router.navigate(["/product","pioneer"]);
        });
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        break;
      case 3:
        this.router.navigate(["/home"]).then(()=>{
          this.router.navigate(["/product","traktor"]);
        });
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        break;
      case 4:
        this.router.navigate(["/home"]).then(()=>{
          this.router.navigate(["/product","dennon-dj"]);
        });
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        break;
      default:
        break;
    }

  }
}
