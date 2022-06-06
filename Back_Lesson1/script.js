const stopBtn = document.querySelector(".stop-btn");
const task1Btn = document.querySelector(".task1-btn");
const task2Btn = document.querySelector(".task2-btn");

const startCounter = 1; // for both tasks
const startDelay = 100; // for task 2

task1Btn.addEventListener("click", () => {
  task1(startCounter);
});

task2Btn.addEventListener("click", () => {
  task2(startCounter, startDelay);
});

// Task 1
function task1(counter, id) {
  console.log(`Hello World ${counter}`);
  console.log(`Delay is ${counter} ${counter === 1 ? "second" : "seconds"}`);
  counter++;

  id = setTimeout(task1, 1000 * counter, counter, id);
  if (id !== -1) {
    stopBtn.addEventListener("click", () => {
      clearTimeout(id);
    });
  }
}

// Task 2
function task2(counter, delay, id) {
  console.log(`Hello World ${counter}`);

  if (counter % 5 === 0) {
    console.log(`Delay was ${delay} miliseconds`);
    delay += 100;
  }

  id = setTimeout(task2, delay, ++counter, delay, id);
  stopBtn.addEventListener("click", () => {
    clearTimeout(id);
  });
}

