import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/tasks");
  };

  return (
    <>
      <h2>Welcome</h2>
      <p>Example of navigate using logic no Links</p>
      <button onClick={onClickButton}>
        Clickame para ir a tasks pero no soy un link
      </button>
    </>
  );
}
export default Welcome;
