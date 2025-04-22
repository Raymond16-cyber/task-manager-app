const deleteAllPostBtn = document.getElementById("clear-btn");
const createPostBtn = document.getElementById("add-post");
const postInputBox = document.getElementById("create-post-input");

const postContainer = document.getElementById("post-container");
const errorMessage = document.getElementById("error-paragraph");
const clearSuccessMessage = document.getElementById("clear-success-message");
const clearErrorMessage = document.getElementById("clear-success-error");
const hiddenMessage = document.getElementById("hidden-message");
const calculateTasks = document.getElementById("calculate-number-of-tasks");

createPostBtn.addEventListener("click", addPost);

function addPost() {
  clearErrorMessage.textContent = "";
  const newTaskDiv = document.createElement("div");
  const newTaskParagraph = document.createElement("p");
  const newTaskIcon = document.createElement("i");
  newTaskDiv.classList =
    "w-full bg-gray-500 h-12  py-2 text-white border rounded-md px-3 flex flex-row justify-between my-2 transition-transform duration-700 hover:scale-95 transition-transform duration-700 hover:bg-gray-700";
  newTaskIcon.classList = "bx bx-x text-lg text-black";
  newTaskDiv.appendChild(newTaskParagraph);
  newTaskDiv.appendChild(newTaskIcon);

  const toBeValue = postInputBox.value;
  if (toBeValue == "") {
    errorMessage.textContent = "this field should not be empty";
    errorMessage.classList = "mb-4 italic text-red-800";
  } else {
    errorMessage.textContent = "";

    newTaskParagraph.textContent = toBeValue;
    postContainer.appendChild(newTaskDiv);
    if (postContainer.childElementCount == 1) {
      calculateTasks.textContent = `you have a task in your task list`;
    } else {
      calculateTasks.textContent = `you have ${postContainer.childElementCount} tasks in your task list`;
    }
    postInputBox.value = ""
    console.log(postContainer.childElementCount);
    newTaskIcon.addEventListener("click", remTask);

    function remTask() {
      postContainer.removeChild(newTaskDiv)
      if (postContainer.childElementCount == 0) {
        calculateTasks.textContent = ""
    } else {
          calculateTasks.textContent = `you have ${postContainer.childElementCount} tasks in your task list`

      }
    }
  }
}

deleteAllPostBtn.addEventListener("click", clearAllPost);
function clearAllPost() {
  if (postContainer.childElementCount == 0) {
    clearSuccessMessage.textContent = "";
    clearErrorMessage.textContent =
      "Cannot delete tasks at the moment,nothing to delete.";
    clearErrorMessage.classList = "mb-4 italic text-red-800";
    console.log(postContainer.childElementCount);
    setTimeout(() => {
      clearErrorMessage.textContent = "";
    }, 4000);
  } else if (postContainer.childElementCount > 0) {
    clearErrorMessage.innerHTML = "";
    postContainer.textContent = "";
    clearSuccessMessage.textContent = "All tasks Cleared Successfully✅✅";
    clearSuccessMessage.classList ="my-8 italic text-bold text-2xl text-green-800";
    // empty the task counter on clear task
    calculateTasks.textContent=""

    setTimeout(() => {
      clearSuccessMessage.textContent = "";
    }, 4000);
  }
}