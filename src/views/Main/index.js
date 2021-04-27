import React, { useEffect, useState } from "react";
import CardItem from "../../components/CardItem";
import FormCreate from "../../components/FormCreate";
import Todos from "../../api/todos";
import { StyledMain, StyledWrapper, StyledDivider } from "./Main.styles";

export default function Main() {
  const apiTodos = new Todos();
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const result = await apiTodos.list();
    setTodos(result);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function destroyTodo(id) {
    await apiTodos.destroy({ id });

    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    fetchTodos();
  }

  async function toggleStatus(todo) {
    const data = apiTodos.update({
      ...todo,
      done: !todo.done,
    });
    const index = todos.findIndex(({ id }) => id === data.id);
    todos[index] = data;
    fetchTodos();
  }

  return (
    <>
      <StyledMain>
        <StyledWrapper>
          <h1>TODO LIST</h1>
          <FormCreate apiTodos={apiTodos} todos={todos} refetch={fetchTodos} />
          <StyledDivider />
          <StyledWrapper.List>
            {todos.map((todo) => (
              <CardItem
                key={todo.id}
                title={todo.text}
                date={todo.date}
                checked={todo.done}
                type={todo.type}
                toggleStatus={() => toggleStatus(todo)}
                destroyTodo={() => destroyTodo(todo.id)}
              />
            ))}
          </StyledWrapper.List>
        </StyledWrapper>
      </StyledMain>
    </>
  );
}
