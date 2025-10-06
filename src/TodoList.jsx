import AllButton from "./AllButton";
import "./TodoList.css";
export default function TodoList({ tasks, destroy, edit, complete }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <span
            style={{ textDecoration: task.complete ? "line-through" : "none" }}
          >
            <li key={task.id}>
              {task.task}
              <AllButton label="Delete" onclick={() => destroy(task.id)} />
              <AllButton label="Edit" onclick={() => edit(task.id)} />
              <AllButton
                label={task.complete ? "Undo" : "Complete"}
                onclick={() => complete(task.id)}
              />
            </li>
          </span>
        ))}
      </ul>
    </>
  );
}
