import { Header } from "./Components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PrdtList } from "./Components/PrdtList"
import PrdtDetails from "./Components/PrdtDetails"

function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
              <Route path="/" exact Component={PrdtList}/>
              <Route path="/prdt/:prdtId" exact Component={PrdtDetails}/>
              <Route>404 Not Found!</Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
