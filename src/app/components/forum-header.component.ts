import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-forum-header',
    standalone: true,
    imports: [CommonModule],
    template: `
    <header class="forum-header">
      <div class="container">
        <h1>🎯 Angular Forum</h1>
        <p class="tagline">Comunidad de desarrollo y aprendizaje</p>
        <nav class="main-nav">
          <a href="#" class="nav-link">Inicio</a>
          <a href="#" class="nav-link">Temas</a>
          <a href="#" class="nav-link">Comunidad</a>
          <a href="#" class="nav-link">Mi Perfil</a>
        </nav>
      </div>
    </header>
  `,
    styles: [`
    .forum-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 700;
    }
    .tagline {
      margin: 10px 0 20px;
      font-size: 1.1rem;
      opacity: 0.9;
    }
    .main-nav {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 6px;
      transition: background 0.3s;
    }
    .nav-link:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class ForumHeaderComponent { }
