import { useState } from "react";
import { Todo, NewTodoData } from "../types";

export const useTodos = (initialNewTodoData: NewTodoData) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoData, setNewTodoData] = useState<NewTodoData>(initialNewTodoData);

  // handle create todo
  const createTodo = (_e: React.FormEvent) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: newTodoData.title.trim(),
      tasks: newTodoData.tasks.filter((obj) => obj.task.trim()).map(task => ({
        ...task,
        taskId: task.taskId || crypto.randomUUID()
      })),
      createdAt: Date.now(),
      updatedAt: false,
      priorities: { priority: newTodoData.priorities.priority }
    };
    console.log("newtododta", newTodoData);
    setTodos((prev) => [...prev, newTodo].sort((a, b) => 
      parseInt(a.priorities.priority) - parseInt(b.priorities.priority)
    ));
    setNewTodoData(initialNewTodoData);
  };

  // handle update todo
  const updateTodo = (editingTodo: Todo) => {
    const temp = [...todos];
    const updatedTodos = temp.map((todo) => {
      if (todo.id === editingTodo.id)
        return {
          ...todo,
          title: editingTodo.title.trim(),
          tasks: editingTodo.tasks.filter((obj) => obj.task.trim()),
          updatedAt: Date.now(),
          priorities: { priority: editingTodo.priorities.priority }
        };
      else {
        return todo;
      }
    });
    const newdata = updatedTodos.sort(
      (a, b) => parseInt(a.priorities.priority) - parseInt(b.priorities.priority)
    );
    console.log("newdata");
  
    setTodos(newdata);
    // console.log("updated data", updatedTodos);
  };

  // delete delete by id
  const deleteTodoById = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //handle check box by todo id and task id
  const updateCheckBox = (todoId: string, taskId: string) => {
    const tempTodo = todos.find((todo) => todo.id === todoId);
    if (!tempTodo) return;

    const updatedTasks = tempTodo.tasks.map((obj) => {
      if (obj.taskId === taskId) {
        return {
          ...obj,
          isCompleted: !obj.isCompleted,
        };
      } else {
        return obj;
      }
    });
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          tasks: updatedTasks,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  return {
    createTodo,
    updateTodo,
    deleteTodoById,
    todos,
    newTodoData,
    setTodos,
    updateCheckBox,
    setNewTodoData,
  };
};
    