import { Todo } from "../interfaces/type";

const API_URL = "https://example.com/api/todos";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createTodo(title: string): Promise<Todo> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
}
