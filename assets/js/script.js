const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'fe2e001c2cmsh643c4bc3af2c398p198b58jsn1e122a1230ee'
	}
};

var urlApi = "https://weatherapi-com.p.rapidapi.com/ip.json?q=%3CREQUIRED%3E"

fetch(urlApi)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));