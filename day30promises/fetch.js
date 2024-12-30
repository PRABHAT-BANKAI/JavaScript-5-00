async function  show(){
  const url = 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0190d31adamsh58a693a760a401bp145c8ajsn0513254521ed',
		'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com'
	}
};

try {
	const response =  await fetch(url, options);
	const result = await  response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

show();