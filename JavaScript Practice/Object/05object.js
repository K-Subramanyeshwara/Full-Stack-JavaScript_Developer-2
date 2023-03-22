const comics = {
    fullName: "Marvel",
    famousMovie: "",
    printComic: function () {
        //this keyword helps us to get the variable inside the object
        this.famousMovie = "Iron Man"
        console.log(this);
        return this;
    },
    // //this keyword dosen't have access in the arrow function
    // printaComics: () => {
    //     // this.famousMovie = "Iron Man"
    //     console.log(this);
    // }
}

// console.log(comics.printComic());
console.log(comics.printComic().printComic().printComic());
// console.log(comics.printaComics());