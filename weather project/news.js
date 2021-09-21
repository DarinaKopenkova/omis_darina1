class News extends Url {

		constructor(settings) {
				super()
				this.parseSettings(settings)
	}
}

	


	// https://newsapi.org/v2/everything?q=tesla&from=2021-08-21&sortBy=publishedAt&apiKey=c2888376639f4fd3a49fefa58270c5a2

	let settings = {
		url: 'https://newsapi.org/v2/everything',
		q: 'tesla',
		apiKey: 'c2888376639f4fd3a49fefa58270c5a2',
		from:'2021-08-21'
	}
let news = new News(settings)


console.log(news.generateApiUrl())