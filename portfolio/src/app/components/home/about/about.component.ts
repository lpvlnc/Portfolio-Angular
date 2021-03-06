import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  about: About = {
    pictureAbout: '',
    about: '',
    yearsOfExperience: 0,
    clients: 0,
    projects: 0
  }

  constructor(private service: AboutService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getAbout().subscribe({
      next: (response: any) => {
        this.about = response;
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }
}
