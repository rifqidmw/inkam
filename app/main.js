fetch('/inkam/data/info.json')
.then(function(response) {
  console.log('succes get data json');
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});