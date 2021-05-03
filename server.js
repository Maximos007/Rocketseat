const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'html');

nunjucks.configure('view', {
	express:app,
	autoescape: false,
	noCache: true
});

app.get('/', (req, res) => {
	const data = {
		logo_url: 'https://s3-sa-east-1.amazonaws.com/assets.impulso.network/images/partners/rocketseat.svg',
		name: 'Rocketseat',
		role: 'Uma breve descrição da empresa',
		description: 'principais tecnologias utilizadas',
		techs: [
			{name: 'JavaScript'},
			{name: 'NodeJS'},
			{name: 'ReactJS'},
			{name: 'ReactNative'}
		],
		links: [
			{name:'Instagram', url:'https://www.instagram.com/rocketseat_oficial/?hl=pt-br'},
			{name:'Facebook', url:'https://www.facebook.com/rocketseat/'},
			{name: 'Github', url:'https://github.com/Rocketseat'}
		]
	};

	return res.render('about', {about: data} );
});

app.get('/courses', (req, res) => {

	return res.render('courses');
});


app.use(function(req, res) {
	res.status(404).render('not-found');
});

app.listen(3333, function() {
	console.log('server is running');
});
