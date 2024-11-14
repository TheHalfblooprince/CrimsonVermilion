// A closure is an inner function that is inside its outer function’s scope and has access to its variables:
// ```js function handleLikePost(step) { let likeCount = 0; return function addLike() {
// likeCount += step;    
// return likeCount;
// } ```



function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
      likeCount += step;    
      return likeCount;
    }
  //   addLike();
  }
  
  const doubleLike = handleLikePost(2);
  
  console.log(doubleLike());
  console.log(doubleLike());
  console.log(doubleLike());
  
  // Criteria for Closures.
  // 1) Closures are a property of JavaScript functions and functions only.
  // 2) Call function in different scope than where function was original defined

