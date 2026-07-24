import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './courses-layout.html',
  styleUrl: './courses-layout.css',
})
export class CoursesLayoutComponent {}
