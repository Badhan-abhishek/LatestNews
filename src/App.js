import "./static/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardCustom } from "./components/CardCustom";

const uri =
  "https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=GmjBlS7NbF69W9bfxQkd27HAABSyMwrM";




function App() {
  const [data, setData] = useState();
   const  fetchAdvice =  () => {
     axios.get(uri).then((response) => {
        const result = response.data.results
        setData(result)
      })
      .catch((error) => {
        console.log(error)
      });
  };


  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <div className="App">
      {typeof data == "object" ? data.map(article => 
     <CardCustom key={article.id} article={article} />
        ): <h1>Data loading please wait...</h1>}
    </div>
  );
}

export default App;
