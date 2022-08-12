"use strict";

let numberOfFilms;

function start(numberOfFilms) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    }
}

start();

const personMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function rememberMyFilm(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените этот фильм?', '');
        if (a && b != null && a && b != '' && a.length && b.length < 50) {
            personMovieDb.movies[a] = b;
            console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }
}
}




rememberMyFilm();

function detectPersonalLevel() {
    if (personMovieDb.count >= 0 && personMovieDb.count < 10) {
        alert('Оу, да вы начинаете смотреть кино, зачем вам этот сайт?');
    } else if (personMovieDb.count >= 10 && personMovieDb.count < 30) {
        alert('Ну вы не так много посмотрели, как моя сестра, но тоже хорошо :)');
    } else if (personMovieDb.count >= 30) {
        alert('Да вы реально киноман, но мне кажется вам всё таки далеко до моей сестры :)))');
    } else {
        alert('Получилась какая-то несуразица, я думаю вам стоит внимательнее вводить.');
    }
}

detectPersonalLevel();

function showMyDB(hiden) {
    if (!hiden){
        console.log(personMovieDb);
    }
}

showMyDB(personMovieDb.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++ ){
        personMovieDb.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} `);; 
    }
}

writeYourGenres();