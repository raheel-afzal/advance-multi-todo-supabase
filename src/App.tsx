import { useState, useEffect } from "react";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import Button from "./components/Button";
import { NotebookPen } from "lucide-react";
import { useTodos } from "./hooks/useTodo";
import { NewTodoData, Todo, FilterType } from "./types";

function App() {
  const initialNewTodoData: NewTodoData = {
    title: "",
    tasks: [
      {
        task: "",
        isCompleted: false,
      },
    ],
    priorities: { priority: "", x: "" }
  };

  //states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [appliedFilter, setAppliedFilter] = useState<FilterType>("none");

  //custom hooks
  const {
    todos,
    newTodoData,
    createTodo,
    updateTodo,
    deleteTodoById,
    updateCheckBox,
    setNewTodoData,
  } = useTodos(initialNewTodoData);

  //handle create todo
  const handleCreateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    createTodo(e); 
  };
  
  // handle update todo
  const handleUpdateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodo) {
      console.log(editingTodo);
      updateTodo(editingTodo);
      setIsModalOpen(false);
      setEditingTodo(null);
    }
  };

  // handle edit todo
  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  //handle delete by id
  const handleDeleteTodo = (id: string) => deleteTodoById(id);

  //handle filter ,note: will be additional filter in future
  const handleFilterChange = (filter: FilterType) => {
    setAppliedFilter(filter);
  };

  // handle  task check list  update
  const handleCheckListChange = (todoId: string, taskId: string) => {
    updateCheckBox(todoId, taskId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTodo(null);
  };

  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);


  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center items-end gap-x-4 mb-5 bg-blue-500  text-gray-50 rounded-lg pt-5 pb-6">
          <h1 className="text-4xl font-bold ">Todo App</h1>
          <NotebookPen size={40} />
        </div>

        <div className="bg-white  px-6 py-3 rounded-lg shadow-lg border mb-8">
          <form onSubmit={handleCreateTodo}>
            <TodoForm formData={newTodoData} setFormData={setNewTodoData} />
            <div className="w-full flex justify-center mt-5">
              <Button
                type="submit"
                className="px-6 bg-green-500 hover:bg-green-600"
              >
                Create Todo
              </Button>
            </div>
          </form>
        </div>

        <TodoList
          todos={todos}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
          onCheckListChange={handleCheckListChange}
          filterBy={appliedFilter}
          onFilterChange={handleFilterChange}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Edit Todo"
        >
          <form onSubmit={handleUpdateTodo}>
            <TodoForm formData={editingTodo} setFormData={setEditingTodo} />
            <Button type="submit">Update Todo</Button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default App;
