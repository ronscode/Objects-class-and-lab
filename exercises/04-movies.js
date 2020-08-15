/* Write a function that stores information about movies inside an array. The movie's object info must be ​name​, director​ ​and​ ​date​. You can receive several types of input:
● "​addMovie {movie name}"​ – add the movie
● "{moviename}directedBy{director}"​–checkifthemovie​exists​andthenaddthedirector
● "{moviename}onDate{date}"​–checkifthemovie​exists​andthenaddthedate
At the end print all the movies that have ​all the info​ (if the movie has ​no​ director, name or date, ​don’t​ print it) in JSON​ format. 
1. Setup the function and call. 
2. Create an empty array to hold the final output
3. 
*/


function movies(theInput) {
 let myMoviesArray = []
}

movies([
  'addMovie FastAndFurious',
  'addMovie Godfather',
  'Inception directedBy ​Christopher Nolan​'​,
  'Godfather directedBy ​Francis Ford Coppola​'​,
  'Godfather onDate 29.07.2018',
  'FastAndFurious onDate 30.07.2018',
  'Batman onDate 01.08.2018', 
  'FastAndFurious directedBy ​Rob Cohen​' ])