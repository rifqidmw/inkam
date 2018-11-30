var myList = document.getElementById("list");
fetch('/inkam/data/info.json')
.then(function(response) {
  return response.json();
}).then(function(data) {
	for (var i = 0; i < data.data.length; i++) {
      	// var listItem = '<h5>'+data.data[i].info_name+'coba</h5>';
      	// myList.appendChild(listItem);

      	var h5 = document.createElement("h5");
    	h5.innerHTML = 'coba';
    	myList.appendChild(h5);
	}
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
