class Person {
	constructor(firstName, lastName, gender, fullAge, dead = '') {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.live = true;	
		this.dead = dead;
		this.fullAge = fullAge;		
	}

	
	set fullAge(year) {
		const date = new Date();
		
		if (this.dead !== '') {
			this.live = false;
			this.age = this.dead - year;
		} else {
			this.age = date.getFullYear() - year;
			this._fullAge = year;
		}
	}

	
}


const teresaPushchakova = new Person('Тереса', 'Пущакова', 'женский', '1957');
const taniaNikonova = new Person('Татьяна', 'Никонова', 'женский', '1983');
const mariaMichalchenia = new Person('Мария', 'Михальченя', 'женский', '1930', '1984')



console.log(teresaPushchakova)
console.log(taniaNikonova)
console.log(mariaMichalchenia)



