import React from "react";
import "./App.css";
import request from "./requests";

//Components
import Row from "./components/Row";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

function App() {
  const {
    fetchTrending,
    fetchNetflix,
    fetchTopRated,
    fetchHorror,
    fetchDocumentaries,
    fetchRomance,
    fetchComedy,
    fetchAction,
  } = request;
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Originales de Netflix"
        fetchUrl={fetchNetflix}
        isLargeRow={true}
      />
      <Row title="Tendencias ahora" fetchUrl={fetchTrending} />
      <Row title="Mejor votadas" fetchUrl={fetchTopRated} />
      <Row title="Accion" fetchUrl={fetchAction} />
      <Row title="Horror" fetchUrl={fetchHorror} />
      <Row title="Comedias" fetchUrl={fetchComedy} />
      <Row title="Romance" fetchUrl={fetchRomance} />
      <Row title="Documentales" fetchUrl={fetchDocumentaries} />
    </div>
  );
}

export default App;
