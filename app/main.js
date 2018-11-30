var myList = document.getElementById("datane");
fetch('/inkam/data/info.json')
.then(function(response) {
  return response.json();
}).then(function(data) {
	for (var i = 0; i < data.data.length; i++) {
    	var lay = '<div class="col-sm-6 col-12"><div class="card"><img class="card-img-top" src="/inkam/asset/'+data.data[i].info_image+'"><div class="card-body"><h5>'+data.data[i].info_name+'</h5><span class="tgl">'+data.data[i].created_at+'</span><p class="card-text">'+data.data[i].info_desc+'</p><a href="" class="btn btn-sm btn-outline-warning">Selengkapnya...</a></div></div></div>';
		myList.insertAdjacentHTML('beforeend', lay);
	}
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
