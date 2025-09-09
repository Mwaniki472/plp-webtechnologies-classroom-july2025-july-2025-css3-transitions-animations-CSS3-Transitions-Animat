/* Demonstrating Scope, Parameters & Return Values  */

// Global variable (scope example)
let animationCount = 0;

// Function with parameters and return value
function updateMessage(count) {
  return `The box has been animated ${count} times`;
}

// DOM elements
const btn = document.getElementById("animateBtn");
const box = document.getElementById("box");
const description = document.getElementById("description");

// Event Listener: Trigger animation
btn.addEventListener("click", function () {
  // Local variable (scope example)
  let trigger = true;

  if (trigger) {
    box.classList.add("bounce"); // Add animation class

    // Increment global count
    animationCount++;

    // Update message using function with return value
    description.textContent = updateMessage(animationCount);

    // Remove animation class after it finishes
    setTimeout(() => {
      box.classList.remove("bounce");
    }, 1000);
  }
});

