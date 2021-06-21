import 'regenerator-runtime';
import '../styles/main.css';

import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelectorAll('.nav__item');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function() {
  drawer.classList.remove('open');
});

main.forEach((e) => {
  e.addEventListener('click', function() {
    drawer.classList.remove('open');
  });
});

drawer.addEventListener('touchmove', () => {
  drawer.classList.remove('open');
});

drawer.addEventListener('click', () => {
  drawer.classList.remove('open');
});

import('../DATA.json').then(({default: jsonData}) => {
  console.log(jsonData['restaurants']);
  let listHtml = '';
  jsonData['restaurants'].forEach((data) => {
    listHtml += `
            <div class="card">
                <img class="card__thumb" src="${data['pictureId']}" 
                alt="${data['name']}" title="${data['name']}">
                <div class="card__content">
                    <p class="card__city">${data['city']}</p>
                    <p class="card__rating">
                        Rating : ${data['rating']}
                    </p>
                    <h1 class="card__title"><a href="#">${data['name']}</a></h1>
                    <p class="card__desc">
                    ${data['description'].slice(0, 150)}... 
                    </p>
                </div>
            </div>
        `;
  });
  document.querySelector('.content').innerHTML = listHtml;
});
