
var im = require('imagemagick')
  , path = require('path')
  
let convertArgs = [
  './images/abc.jpg',
  '-resize',
  300 + 'x' + 300,
  './images/thumbnail_abc.jpg'
];

im.convert(convertArgs, function(err, metadata){
  if (err) throw err;

  console.log('success! Checkout your new thumb: ');
});
