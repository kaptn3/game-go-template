// считывание нажатой клавиши
document.addEventListener('keydown', function(e){
  var key = e.key + e.location;
  if ((key === 'ArrowUp0') || (key === 'w0') || (key === 'ц0')) {
    console.log('вверх')    
  } else if ((key === 'ArrowDown0') || (key === 's0') || (key === 'ы0')) {
    console.log('вниз');
  } else if ((key === 'ArrowLeft0') || (key === 'a0') || (key === 'ф0')) {
    console.log('влево');
  } else if ((key === 'ArrowRight0') || (key === 'd0') || (key === 'в0')) {
    console.log('вправо');
  }
});
