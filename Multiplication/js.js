
class Calc	{

	#container 
	#input
	#buttons

	constructor(containerID) {
		

		this.#container = document.getElementById(containerID)

		if(this.#container == null) console.log('Check name')

		try{
		this.#input = this.#container.querySelector('input[type="text"]')

		this.#buttons = this.#container.querySelectorAll('.btn')
		this.attachEventToButtons()
		} catch(info) 
		{
				console.log(info.message)
		}
		
		
	}


	attachEventToButtons(){

		if(typeof this.#buttons== 'object'&& this.#buttons.length > 0) {

			this.#buttons.forEach(button => {

				button.addEventListener('click', event => {
					//console.log(event.target.innerText)
					
					let btnName = event.target.innerText
					if (btnName == '=')
					{
						this.showresult()
					} else if(btnName == 'CE') {
						this.zeroFormula()
					} else
					{

						if(this.clearFormula(btnName) == true) {

							this.#input.value += btnName
						}
						
					}
					
				})
			})
		} 
	}
	showresult() {
		this.#input.value = 0
	}

	zeroFormula(){
		this.#input.value = eval(this.#input.value)
	}


	clearFormula(currentSymbol){
		//doubles
		let inputText = this.#input.value.toString().trim()
		let lastSymbol = inputText.substr(inputText.length - 1, 1)

		if(lastSymbol != currentSymbol && isNaN(currentSymbol) && isNaN(lastSymbol)) {

			this.#input.value = inputText.substr(0, inputText.length - 1) + currentSymbol

		} 
		else if((lastSymbol != currentSymbol && isNaN(currentSymbol)) || !isNaN(currentSymbol))
		{
			return true
		} 
			return false
		}
	}


new Calc('calc')

