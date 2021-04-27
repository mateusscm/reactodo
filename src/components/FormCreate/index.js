import React, { useState } from "react";
import ActivityPicker from "../ActivityPicker";
import Button from "../Button";
import Checkbox from "../Checkbox";
import { StyledForm, StyledInput } from "./FormCreate.styles";
import { format } from "date-fns";

const FormCreate = ({ apiTodos, todos, refetch }) => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("other");

  const formattedDate = format(date, "'Day' dd 'of' MMMM', at ' HH:mm'h'");
  console.log(formattedDate);

  async function createTodo(e) {
    e.preventDefault();
    const data = await apiTodos.store({
      text,
      done,
      date: formattedDate,
      type,
    });
    todos.push(data);

    setText("");
    setDone(false);
    refetch();
  }

  return (
    <StyledForm onSubmit={createTodo}>
      <StyledForm.InputContainer>
        <StyledInput
          type="text"
          placeholder="Type a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <ActivityPicker activity={type} setActivity={setType} />
      </StyledForm.InputContainer>
      <StyledForm.CheckboxContainer>
        <Checkbox
          label={done ? "Done" : "Not done"}
          required
          checked={done}
          onChange={() => setDone(!done)}
        />
        <Button type="submit">Create</Button>
      </StyledForm.CheckboxContainer>
    </StyledForm>
  );
};

export default FormCreate;
