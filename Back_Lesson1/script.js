const stopBtn = document.querySelector(".stop-btn");
const task1Btn = document.querySelector(".task1-btn");
const task2Btn = document.querySelector(".task2-btn");
//let id;
task1Btn.addEventListener("click", () => {
  task1(1);
});

task2Btn.addEventListener("click", () => {
  task2(1, 100);
});

// Task 1
function task1(counter, id) {
  console.log(`Hello World ${counter}`);
  id = setTimeout(task1, 1000, ++counter, id);
  if (id !== -1) {
    stopBtn.addEventListener("click", () => {
      clearTimeout(id);
    });
  }
}

// Task 2
function task2(counter, delay, id) {
  console.log(`Hello World ${counter}`);
  counter++;
  console.log(`Hello World ${counter}`);
  counter++;
  console.log(`Hello World ${counter}`);
  counter++;
  console.log(`Hello World ${counter}`);
  counter++;
  console.log(`Hello World ${counter}`);
  console.log(`Delay is ${delay}`);
  id = setTimeout(task2, delay, ++counter, delay + 100, id);
  if (id !== -1) {
    stopBtn.addEventListener("click", () => {
      clearTimeout(id);
    });
  }
}

