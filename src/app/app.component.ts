import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'biginner';

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
