export interface Task {
  taskId?: string;
  task: string;
  isCompleted: boolean;
}

export interface Priorities {
  priority: string;
  x?: string;
}

export interface Todo {
  id: string;
  title: string;
  tasks: Task[];
  createdAt: number;
  updatedAt: number | false;
  priorities: Priorities;
}

export interface NewTodoData {
  title: string;
  tasks: Task[];
  priorities: Priorities;
}

export interface SelectOption {
  name: string;
  value: string;
}

export type FilterType = "none" | "pending" | "completed";

export interface TodoFormProps {
  formData: NewTodoData | Todo | null;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export interface TodoListProps {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
  onCheckListChange: (todoId: string, taskId: string) => void;
  filterBy: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface SelectProps {
  formData: NewTodoData | Todo;
  handledropdownchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}

export interface BadgeProps {
  color: string;
  text: string;
  onClick: () => void;
}
