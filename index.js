var joke_setup= document.getElementById('joke_setup')
var joke_punchline= document.getElementById('joke_punchline')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
		'X-RapidAPI-Key': '4045fbb153msh3a9114467970c96p1791b9jsnd436b6bed045'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(jokesData => {
	
        const jokes = jokesData.body;
        joke_setup.innerHTML=jokes[0].setup;
		joke_punchline.innerHTML=jokes[0].punchline
    })