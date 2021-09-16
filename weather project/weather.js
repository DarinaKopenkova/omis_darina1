//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//89be48c324d777404e3c0bbd045b2dbc

class weather {
settings = {
	url: 'https://api.openweathermap.org/data/2.5/weather',
	q: 'Tallinn',
	appid: '89be48c324d777404e3c0bbd045b2dbc',
	units: weather.units.imperial
}

static units = {
	SUMMER: "standart",
	metric: "metric",
	imperial: "imperial"
}

	constructor(settings = {empty: true}) {
		

		if(typeof settings == 'object' && settings.empty == false) 
		{

			if(settings.hasOwnProperty('url') == true) this.settings.url = settings.url
			if(settings.hasOwnProperty('q'))this.settings.q = settings.q
			if(settings.hasOwnProperty('appid'))this.settings.appid = settings.appid
		}
		this.checkDayPart()

		this.getData()

		console.log('---end of class---')
	}

	generateApiUrl(){


		// console.log(Object.entries(this.settings))
		let urlItems = []
		Object.entries(this.settings).forEach(item => {
			if(item[0] != 'url')
			urlItems.push(item[0] + "=" + item[1])

		})
		return this.settings.url + "?" + urlItems.join('&')

	}

	getData(){

		fetch(this.generateApiUrl())
		.then(Response => Response.json())
		.then(data => {
			console.log(data)
			let temp = this.DivTemp
			temp.innerHTML = data.main.temp

			let city = this.DivCity
			city.innerHTML = data.name


			let description = this.getDivDescription()
			description.innerHTML = data.weather[0].description
		})

	}

checkDayPart(){
	let date = new Date()


	let hour = date.getHours()

	if((hour >= 0 && hour <= 6) || (hour >= 18 && hour <= 23))
{
	document.body.classList.remove('day')
	document.body.classList.add('night')
} else if (hour >= 6 && hour <= 18) {
		document.body.classList.remove('night')
			document.body.classList.add('day')
}


}

		get DivTemp(){
			return document.getElementById('temp')
		}
		get DivCity(){
			 return document.getElementById('city')
		}
		getDivIcon(){
			return document.getElementById('icon')
		}
		getDivDescription(){
			return document.getElementById('description')
		}

}

let settings = {
	units: weather.units.imperial
}
let w = new weather({settings})
console.log(w.generateApiUrl())
w.getData()
