import { Button, CardHeader, Input } from "reactstrap";
import { AddTask } from "../../../../utils/Constant";
import { useAppDispatch, useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { toast } from "react-toastify";
import { addNewTodo, setTask } from "../../../../ReaduxToolkit/Reducer/ToDoSlice";

const TodoHeader = () => {
  const {task} = useAppSelector((state)=>state.todo)
  const dispatch=useAppDispatch()
  const handleNewTask = () => {
    if (task === "") {
      toast.error("please add your todo");
    } else {
      dispatch(addNewTodo(task));
      dispatch(setTask(" "));
    }
  };

  const onTaskChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(e.currentTarget.value));
  };
  return (
    <CardHeader className="b-bottom">
      <div className="todo-list-header">
        <div className="new-task-wrapper input-group">
          <Input
            className="m-0"
            id="new-task"
            placeholder="Enter new task here. . ."
            onChange={(e)=>onTaskChanged(e)}
            value={task}
          />
          <Button color="primary" className="add-new-task-btn" id="add-task" onClick={handleNewTask}>
            {AddTask}
          </Button>
        </div>
      </div>
    </CardHeader>
  );
};

export default TodoHeader;
