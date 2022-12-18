/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    const dateToday = new Date();

    [
      {
        title: "Java",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Python",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
    ].forEach(add);
  });
  test("checks creating a new todo", () => {
    expect(all.length).toEqual(2);
    add({
      title: "Complete Project works",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    })

    expect(all.length).toEqual(3);
  })

  test("checks marking a todo as completed", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("checks retrieval of overdue items", () => {
    expect(overdue().length).toEqual(0);
  });

  test("checks retrieval of due today items", () => {
    expect(dueToday().length).toEqual(3);
  });

  test("checks retrieval of due later items", () => {
    expect(dueLater().length).toEqual(0);
  });
});