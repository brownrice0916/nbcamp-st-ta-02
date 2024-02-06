import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const todos = useSelector((state) => state.todos);

  const foundData = todos.find((item) => {
    return item.id === params.id;
  });

  return (
    <>
      <p>To Do List 상세 페이지</p>
      <div style={{ border: "1px solid black" }}>
        <p>제목:{foundData.title}</p>
        <p>내용:{foundData.body}</p>
        <p>완료여부:{foundData.isDone ? "완료" : "미완"}</p>
      </div>
    </>
  );
};

export default Detail;
