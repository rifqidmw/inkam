fetch('/inkam/data/info.json')
.then(function(response) {
  return response.json();
}).then(function(data) {
	console.log(data);
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
