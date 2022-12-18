/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable semi */
const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      let dueDate = new Date();
      const today = formattedDate(dueDate);
      return all.filter((todo) => {
        return todo.dueDate < today;
      });
    };
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      let dueDate = new Date();
      const today = formattedDate(dueDate);
      return all.filter((todo) => {
        return todo.dueDate == today;
      });
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      let dueDate = new Date();
      const today = formattedDate(dueDate);
      return all.filter((todo) => {
        return todo.dueDate > today;
      });
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      let dueDate = new Date();
      const today = formattedDate(dueDate);
      return list
        .map((todo) => {
          return `[${todo.completed ? "x" : " "}] ${todo.title} ${
            todo.dueDate !== today ? todo.dueDate : " "
          }`;
        })
        .join("\n");
      // return OUTPUT_STRING
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}
  module.exports = todoList;