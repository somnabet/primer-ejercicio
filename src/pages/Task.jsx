import { useParams } from "react-router-dom";

function Task() {
  const { id } = useParams();
  return (
    <>
      <h2>Page for item with id:</h2>
      <p>{id}</p>
    </>
  );
}

export default Task;
