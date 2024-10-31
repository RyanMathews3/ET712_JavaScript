/* 
Ryan Mathews
Homework 3 – Objects and exception handling in JS 
*/

class Movie {
    constructor(title, director, year) {
      this.title = title;
      this.director = director;
      this.year = year;
    }
  
    getDetails() {
      return `${this.title} (${this.year}) - Directed by ${this.director}`;
    }
  }
  
  
  class MovieCollection {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    removeMovie(title) {
      try {
        const index = this.movies.findIndex(movie => movie.title === title);
        if (index === -1) {
          throw new Error(`Movie with title '${title}' does not exist in the collection.`);
        }
        this.movies.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    }
  
    showMovies() {
      try {
        if (this.movies.length === 0) {
          throw new Error('No movies exist in the collection.');
        }
        this.movies.forEach(movie => console.log(movie.getDetails()));
      } catch (error) {
        console.error(error);
      }
    }
  }