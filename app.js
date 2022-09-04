//This script fulfills the project reqs for "Build A Library" in Codecademy

//sets Media parent nad parent props
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(yesOrNo) {
    this._isCheckedOut = yesOrNo;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isChckedOut;
  }

  getAverageRating() {
    let sumOfRatings = this.ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return Math.floor(sumOfRatings / this.ratings.length);
  }

  addRatings(value) {
    this.ratings.push(value);
  }
  
}

//sets new book child of media
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  getAuthor() {
    return this._author;
  }

  getPages() {
    return this._pages;
  }
}


//sets new movie child of media
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

//displays media titles, check out status, and avg ratings
const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson", 544);
historyOfEverything.toggleCheckOutStatus();
console.log("Title of Media: " + historyOfEverything.title);
console.log("Check Out Status: " + historyOfEverything.isCheckedOut);
historyOfEverything.addRatings(4);
historyOfEverything.addRatings(5);
historyOfEverything.addRatings(5);
console.log("Average Ratings: " + historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log("Title of Media: " + speed.title);
console.log("Check Out Status: " + speed.isCheckedOut);
speed.addRatings(1);
speed.addRatings(1);
speed.addRatings(5);
console.log("Average Ratings: " + speed.getAverageRating());
