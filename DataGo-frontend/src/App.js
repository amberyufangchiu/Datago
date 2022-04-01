import React, { useContext, useState, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PlayerDetail from "./pages/PlayerDetail.jsx";
import Context from "./context";

const App = () => {
  const [SearchRes, setSearchRes] = useState([]);
  const [Pagination, setPagination] = useState(5);
  const PageNum = useRef(1);
  const [Search, setSearch] = useState({
    teamValue: "all",
    keywordValue: " ",
  });

  return (
    <Context.Provider
      value={{
        SearchRes,
        setSearchRes,
        PageNum,
        Search,
        setSearch,
        Pagination,
        setPagination,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:cate" component={Home} exact />
          <Route path="/PlayerDetail/:id" component={PlayerDetail} exact />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
