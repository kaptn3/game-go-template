var app = new Vue({
  el: '#app',
  data: {
    x: [0, 1, 2, 3, 4],
    y: [0, 1, 2, 3],
    hero: 4,
    div: []
  }
});

lengthX = app.x.length;
lengthY = app.y.length;
maximum = lengthX * lengthY;

// генерация поля
let count = 0;
for (let i = 0; i < maximum; i++) {
  app.div.push( i );
}

// установка ширины для поля
const field = document.querySelector('.field');
field.style.width = lengthX * 50 + 'px';

// установка где находиться герой
app.div[app.hero] = 'man'; 

// проверка на границу поля
function overBoundary(hero) { // hero - следующий ход
  if ( (hero < maximum) && (hero >= 0) ) {
    return hero;
  } else {
    return app.hero;
  }
}

// движение
function go(direction) {
  Vue.set(app.div, app.hero, '0');
  switch (direction) {
    case 'down':      
      app.hero = overBoundary(app.hero + lengthX);
      break;
    case 'up':
      app.hero = overBoundary(app.hero - lengthX);
      break;
    case 'left':
      if ((app.hero - 1) % lengthX !== (lengthX - 1)) {
        app.hero = overBoundary(app.hero - 1);
      }
      break;
    case 'right':
      if ((app.hero + 1) % lengthX !== 0) {
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

