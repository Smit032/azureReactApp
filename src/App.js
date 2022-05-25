import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const API = process.env.REACT_APP_API_URL;
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ API", API);

  useEffect(() => {
    getList();
  }, [API]);

  const getList = () => {
    fetch(`/posts/list`)
      .then(async (res) => {
        const list = await res.json();
        setData(list?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      {data?.map((d, i) => {
        return (
          <div key={i}>
            <h3>{d?.name}</h3>
            <p>{d?.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
