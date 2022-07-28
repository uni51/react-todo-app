import axios from "axios";

export default function App() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return console.log(response.data);
  };

  fetchData();

  return <h1>Hello React!!</h1>;
}
