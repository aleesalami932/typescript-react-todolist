import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (event: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = (props) => {
  useRef;

  return (
    <form className="input" onSubmit={(event) => props.addHandler(event)}>
      <input
        type="text"
        value={props.todo}
        onChange={(event) => props.setTodo(event.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
