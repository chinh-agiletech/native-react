
import TodoComponent from "../components/Todo";
import { ThemedView } from '@/components/ThemedView';

function TodoPage() {
  return (
      <ThemedView>
        <TodoComponent />
      </ThemedView>
  );
}

export default TodoPage;