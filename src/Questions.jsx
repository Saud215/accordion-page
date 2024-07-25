import SingleQuestion from "./SingleQuestion";
import { useState } from "react";
const Questions = ({ questions }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleActiveId = (id) => {
    // console.log(id);
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <section className="container">
      <h1>Questions</h1>

      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleActiveId={toggleActiveId}
          />
        );
      })}
    </section>
  );
};
export default Questions;
