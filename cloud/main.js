exports.hi = function(params, callback){
  return callback(null, {
    text: 'hi'
  });
}