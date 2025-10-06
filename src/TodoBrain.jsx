import { useState } from "react";
import TodoList from "./TodoList";
import TodoShow from "./TodoShow";
import AllButton from "./AllButton";
import { v4 as uuidv4 } from "uuid";
import "./TodoBrain.css";

export default function TodoBrain() {
  const [text, setText] = useState();
  const [tasks, setTasks] = useState([]);

  function create(e) {
    if (text.trim() === "") return;
    e.preventDefault();

    let newTask = {
      id: uuidv4(),
      task: text,
      complete: false,
    };
    setTasks((prev) => [...prev, newTask]);
    console.log(tasks);
    setText("");
  }

  function generator(e) {
    setText(e.target.value);
  }
  function destroy(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    alert("Your task is deleted");
  }
  function edit(id) {
    let newText = window.prompt("enter you new task ");
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, text: (task.task = newText) };
        }
        return task;
      })
    );
  }

  function complete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  }
  return (
    <>
      <TodoShow />
      <form>
        <input
          type="text"
          placeholder="Add your Task !!! "
          value={text}
          onChange={generator}
        />
        <AllButton label="Add" onclick={create} />
      </form>

      <TodoList
        tasks={tasks}
        destroy={destroy}
        edit={edit}
        complete={complete}
      />
    </>
  );
}
