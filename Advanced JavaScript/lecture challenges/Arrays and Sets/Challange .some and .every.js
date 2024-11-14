// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

// check if any song has worn a grammy.
console.log(songs.some(song => song.wonGrammy))

// 2) Check if all the songs were streamed for at least 1.5 million times

// using .map method just for the sake of understanding.
let topHits = songs.map(song=> {
   if(song.timesStreamed > 1.5){
        return song.song
   } 
})

console.log(`The Songs with more than 1.5M streams are: ${topHits}`);
