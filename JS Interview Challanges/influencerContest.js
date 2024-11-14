import postData from "./influencerContestData.js";

/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

function calcAverageLikes(data){

    const totalNumberOfPosts = data.length
    let totalNumberofLikes = data.reduce((accu,curr) => {
        return accu += curr.likes
    },0)
    
    return totalNumberofLikes/totalNumberOfPosts
} 


console.log(calcAverageLikes(postData))
