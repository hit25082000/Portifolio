import { AppService, GitProfile } from './app.service';
import { Component, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  error: any;
  headers: string[] = [];
  config: GitProfile | undefined;

  constructor(private AppService: AppService) {}

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.AppService.getConfig().subscribe({
      next: (data: GitProfile) => (this.config = { ...data }), // success path
      error: (error) => (this.error = error), // error path
    });
  }
}

// const url = 'https://api.github.com/users/hit25082000';
// const contentList = document.querySelector('.ContentList');
// const iconModel = document.querySelector('.IconModel');
// const img = document.createElement('img');
// const projetos = document.querySelector('.Projetos');

// projetos.addEventListener('click', () => {
//   document.querySelector('.IconModel').classList.toggle('Click');
//   document.querySelector('.Home').classList.toggle('Click');
//   document.querySelector('.Contato').classList.toggle('Click');
//   document.querySelector('h2').classList.toggle('Click');
//   document.querySelector('.Desc p').classList.toggle('Click');
//   document.querySelector('.Rocketseat').classList.toggle('Click');
//   document.querySelector('.Alura').classList.toggle('Click');
//   projetos.classList.toggle('Click');
//   setTimeout(() => {
//     document.querySelector('body').style.backgroundColor = 'black';
//   }, 2000);
//   setTimeout(() => {
//     location.href = 'Conteudo/content.html';
//   }, 3000);
// });

// async function start() {
//   const user = await fetch(url).then((r) => r.json());
//   const repos = await fetch(user.repos_url).then((r) => r.json());
//   const icon = await fetch(user.avatar_url).then((r) => r.url);

//   console.log(repos);
//   console.log(icon);

//   const link = document.createElement('a');
//   link.setAttribute('href', user.html_url);
//   img.setAttribute('src', icon);
//   link.append(img);
//   iconModel.append(link);

//   repos.forEach((e) => {
//     const link = document.createElement('a');
//     const li = document.createElement('li');
//     link.setAttribute('href', e.html_url);
//     link.append(li);
//     li.append(e.name);
//     contentList.append(link);
//   });
// }

// start().catch((e) => console.log(e));
