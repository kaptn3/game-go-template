var app = new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0,
    hero: 18,
    div: []
  }
});

// config игры
x = 5;
y = 6;
maximum = x * y;

// стена 
let wall = [12, 17];

// генерация поля со стенами
let count = 0;
for (let i = 0; i < maximum; i++) {
  for (let k = 0; k < wall.length; k++) {
    if (i === wall[k]) {
      app.div.push( 1 );
      break;
    } else if (k === (wall.length - 1)) {
      app.div.push( 0 );
    }
  }
}

// установка ширины для поля
const field = document.querySelector('.field');
field.style.width = x * 50 + 'px';

// установка где находиться герой
app.div[app.hero] = 'man'; 

// проверка на границу поля
function overBoundary(hero) { // hero - следующий ход
  if ( (hero < maximum) && (hero >= 0) /*&& (app.div[hero] === 0)*/ ) {
    for (let i = 0; i < wall.length; i++) {
      if (app.div[hero] !== 1) {
        return hero;
      } else {
        return app.hero;
      }
    }
  } else {
    return app.hero;
  }
}

// движение
function go(direction) {
  Vue.set(app.div, app.hero, '0');
  switch (direction) {
    case 'down':      
      app.hero = overBoundary(app.hero + x);
      break;
    case 'up':
      app.hero = overBoundary(app.hero - x);
      break;
    case 'left':
      if ((app.hero - 1) % x !== (x - 1)) {
        app.hero = overBoundary(app.hero - 1);
      }
      break;
    case 'right':
      if ((app.hero + 1) % x !== 0) {
        app.hero = overBoundary(app.hero + 1);
      }
      break;
  } 
  Vue.set(app.div, app.hero, 'man');
}

// считывание нажатой клавиши
document.addEventListener('keydown', function(e) {
  var key = e.key + e.location;
  if ((key === 'ArrowUp0') || (key === 'w0') || (key === 'ц0')) {
    go('up');  
  } else if ((key === 'ArrowDown0') || (key === 's0') || (key === 'ы0')) {
    go('down');
  } else if ((key === 'ArrowLeft0') || (key === 'a0') || (key === 'ф0')) {
    go('left');
  } else if ((key === 'ArrowRight0') || (key === 'd0') || (key === 'в0')) {
    go('right');
  }
});

