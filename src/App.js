import React, { useState, useEffect } from "react";
import axios from "axios";

import TableList from "./components/TabeList";

const App = () => {
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    axios({
      method: "get",
      url,
      params: {
        _limit: 30,
      },
    })
      .then((res) => {
        console.log(res.data);
        setMainData(res.data);
      })
      .catch((err) => err);
  }, []);

  return (
    <div>
      <TableList columnData={mainData} />;
    </div>
  );
};

export default App;
