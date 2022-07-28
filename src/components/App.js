import React, { useState, useEffect } from "react";
import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

function App() {
  const [todoList, setTodoList] = useState([]);

  // useEffect()を利用することで、コンポーネントのマウント後に処理を実行
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);

      setTodoList(response.data);
    };
    fetchData();
  }, []);

  console.log("TODOリスト:", todoList);

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>
      <h2>TODOリスト</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? "完了" : "未完了"})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
