import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-black-hole',
  animations: [
    trigger('blackHole', [
      state('stable', style({})),

      state('caos', style({ zIndex: 20 })),
      transition('caos => stable', [
        animate(
          '5s',
          keyframes([
            style({
              transform: 'rotateZ(0) scale(1)',
              offset: 0,
              color: '#fbf7f700',
              backgroundImage: 'url(../../assets/blackHole2.png)',
              zIndex: 5,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }),
            style({ transform: 'rotateZ(90deg) scale(166%)', offset: 0.05 }),
            style({ transform: 'rotateZ(180deg) scale(333%)', offset: 0.1 }),
            style({ transform: 'rotateZ(270deg) scale(499%)', offset: 0.15 }),
            style({ transform: 'rotateZ(360deg) scale(666%)', offset: 0.2 }),
            style({ transform: 'rotateZ(450deg) scale(831%)', offset: 0.25 }),
            style({ transform: 'rotateZ(540deg) scale(991%)', offset: 0.3 }),
            style({ transform: 'rotateZ(630deg) scale(991%)', offset: 0.35 }),
            style({ transform: 'rotateZ(720deg) scale(991%)', offset: 0.4 }),
            style({ transform: 'rotateZ(750deg) scale(1151%)', offset: 0.42 }),
            style({ transform: 'rotateZ(780deg) scale(1311%)', offset: 0.43 }),
            style({ transform: 'rotateZ(810deg) scale(1471%)', offset: 0.45 }),
            style({ transform: 'rotateZ(900deg) scale(1630%)', offset: 0.5 }),
            style({ transform: 'rotateZ(990deg) scale(1791%)', offset: 0.55 }),
            style({ transform: 'rotateZ(1080deg) scale(1950%)', offset: 0.6 }),
            style({ transform: 'rotateZ(1160deg) scale(2111%)', offset: 0.65 }),
            style({ transform: 'rotateZ(1250deg) scale(2271%)', offset: 0.7 }),
            style({ transform: 'rotateZ(1340deg) scale(2500%)', offset: 0.75 }),
            style({ transform: 'rotateZ(1430deg) scale(3000%)', offset: 0.8 }),
            style({ transform: 'rotateZ(1520deg) scale(4000%)', offset: 0.85 }),
            style({ transform: 'rotateZ(1610deg) scale(5000%)', offset: 0.9 }),
            style({ transform: 'rotateZ(1700deg) scale(7000%)', offset: 0.95 }),
            style({ transform: 'rotateZ(1790deg) scale(10000%)', offset: 1 }),
          ])
        ),
      ]),
      transition('stable => caos', [animate('2s')]),
    ]),
  ],
  templateUrl: './black-hole.component.html',
  styleUrls: ['./black-hole.component.css'],
})
export class BlackHoleComponent {
  @Output() newItemEvent = new EventEmitter();
  stableElements = true;

  Absorbtion() {
    (this.stableElements = !this.stableElements), this.newItemEvent.emit();
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
