import { ITodo } from '../types/data';
import { TodoItem } from './TodoItem';

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  items,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};
