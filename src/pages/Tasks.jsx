import { useState } from "react";

import Card from "../components/Card";
import "../components/Card.css";

const tareas = [
  {
    id: "86748",
    title: "Card Title",
    subtitle: "Card Subtitle",
    description:
      "Some quick example text to build on the card title and make up the ...",
  },
  {
    id: "86744",
    title: "Card Title 2",
    subtitle: "Card Subtitle",
    description:
      "Some quick example text to build on the card title and make up the ...",
  },
  {
    id: "86745",
    title: "Card Title 3",
    subtitle: "Card Subtitle",
    description:
      "Some quick example text to build on the card title and make up the ...",
  },
  {
    id: "86746",
    title: "Card Title 4",
    subtitle: "Card Subtitle",
    description:
      "Some quick example text to build on the card title and make up the ...",
  },
  {
    id: "86747",
    title: "Card Title 5",
    subtitle: "Card Subtitle",
    description:
      "Some quick example text to build on the card title and make up the ...",
  },
  {
    id: "86749",
    title: "Card Title 6",
    subtitle: "Card Subtitle",
    description:
      "Some quick example text to build on the card title and make up the ...",
  },
];

function Tasks() {
  const [cards, setCards] = useState(tareas);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const addTarea = (e) => {
    e.preventDefault();

    const newTarea = {
      id: crypto.randomUUID(),
      title,
      subtitle,
      description,
      date,
    };
    const newListOfCards = cards.concat(newTarea);

    setCards(newListOfCards);

    setTitle("");
    setSubtitle("");
    setDescription("");
    setDate("");
  };

  const deleteTarea = (idOfCardToDelete) => {
    const newListOfCards = cards.filter(
      (tarea) => tarea.id !== idOfCardToDelete
    );
    setCards(newListOfCards);
  };

  return (
    <>
      <div className="form">
        <div className="inputbox">
          <label>Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="inputbox">
          <label>Subtitle:</label>
          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          ></input>
        </div>
        <div className="inputbox">
          <label>Text:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={addTarea}>Añadir tarea</button>
      </div>
      <div className="list">
        {cards.lenght === 0 && <h1>No hay elementos en la lista</h1>}
        {cards.map((tarea) => (
          <Card
            onDelete={deleteTarea}
            key={tarea.id}
            id={tarea.id}
            title={tarea.title}
            subtitle={tarea.subtitle}
            description={tarea.description}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default Tasks;
