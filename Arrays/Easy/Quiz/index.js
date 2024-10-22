const questions = [
  "Find The Largest Element in an Array",
  "Find the Second Largest Element in an Array without sorting'?",
  "Check if the array is sorted",
  "Remove duplicates from Sorted array",
  "Left Rotate an array by one place",
  "Left rotate an array by D places",
  "Move Zeros to end",
  "Find the Union",
  "Find the Number of Maximum Consecutive Ones",
  "Find the number that appears once, and other numbers twice.",
  "Longest subarray with given sum K(positives)",
  "Longest subarray with sum K (Positives + Negatives)",
];

let remainingQuestions = [...questions]; // Clone the questions array

// Function to show two randomly selected questions
function showNextQuestions() {
  if (remainingQuestions.length < 2) {
    alert("No more questions available.");
    return;
  }

  // Randomly select two questions and remove them from the remaining questions
  const randomIndexes = getTwoUniqueRandomIndexes(remainingQuestions.length);
  const question1 = remainingQuestions.splice(randomIndexes[0], 1)[0];
  const question2 = remainingQuestions.splice(randomIndexes[1], 1)[0];

  // Display the questions
  document.getElementById("question1").innerText = question1;
  document.getElementById("question2").innerText = question2;
}

// Helper function to get two unique random indexes
function getTwoUniqueRandomIndexes(max) {
  let index1 = Math.floor(Math.random() * max);
  let index2;
  do {
    index2 = Math.floor(Math.random() * max);
  } while (index2 === index1);
  return [index1, index2];
}

// Initial call to show the first two questions
showNextQuestions();
