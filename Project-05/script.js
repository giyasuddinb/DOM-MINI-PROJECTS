const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const taskInputValue = taskInput.value.trim();

  if (taskInputValue !== '') {
    const taskUlLists = document.getElementById('taskLists');
    const li = document.createElement('li');
    li.innerHTML =
      '<input type="checkbox"> ' +
      taskInputValue +
      ' <button onClick="taskDelete(this)"> Delete </button>';
    taskUlLists.appendChild(li);

    taskInput.value = '';
  } else {
    alert('Please Add Your Task');
  }
};

const taskDelete = (btn) => {
  const li = btn.parentNode;
  li.parentNode.removeChild(li);
};

const deleteTask = () => {
  const taskLists = document.getElementById('taskLists');
  const checkBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  checkBoxes.forEach((checkBox) => {
    const li = checkBox.parentNode;
    console.log(li.parentNode?.removeChild(li));
  });
};
