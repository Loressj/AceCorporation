import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentYear: number = new Date().getFullYear();

  

  mensaje: string = '';

  constructor(private rutaActiva: ActivatedRoute, private router: Router) { 
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['correoUsuario']) {
        this.mensaje = params['correoUsuario'];
      }
    });
  }

  
  ngOnInit() {
  }

  toHome() {

    this.router.navigate(['/login']);
  }
}

