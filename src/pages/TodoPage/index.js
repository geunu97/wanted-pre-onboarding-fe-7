import Todo from "../../components/Todo";
import { useRedirect } from "../../hooks/useRedirect";

const TodoPage = () => {
  useRedirect();

  return <Todo />;
};

export default TodoPage;
