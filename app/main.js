var myList = document.getElementById("datane");
fetch('/inkam/data/info.json')
.then(function(response) {
  return response.json();
}).then(function(data) {
	for (var i = 0; i < data.data.length; i++) {
      	// var listItem = '<h5>'+data.data[i].info_name+'coba</h5>';
      	// myList.appendChild(listItem);
     //  	var div = document.createElement("div");
     //  	div.className='col-12 col-sm-6';

     //  	var card = document.createElement("div");

     //  	var h5 = document.createElement("h5");
    	// h5.innerHTML = data.data[i].info_name;
    	// div.appendChild(h5);

    	// myList.appendChild(div);
    	var lay = '<div class="col-sm-6 col-12"><div class="card"><div class="card-body"><h5>'+data.data[i].info_name+'</h5></div></div></div>';
		myList.insertAdjacentHTML('beforeend', lay);
	}
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
