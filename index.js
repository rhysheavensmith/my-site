let i = 0;
const txt = "Engineer. Problem Solver. Programmer."; /* The text */
const speed = 100; /* The speed/duration of the effect in milliseconds */
const pauseDuration = 5000; /* Duration of the pause in milliseconds */

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      i = 0;
      document.getElementById("typewriter").innerHTML = "";
      typeWriter();
    }, pauseDuration);
  }
};

// Calling the function
typeWriter();
