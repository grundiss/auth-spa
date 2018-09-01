global.requestAnimationFrame = function(cb) {
  setTimeout(cb, 0);
};