fetch('/inkam/data/info.json')
.then(function(response) {
  console.log(response);
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});