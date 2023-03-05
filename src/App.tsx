import { Home } from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "./components/Container";
import { Quiz } from './pages/Quiz';
import { QuizProvider } from './context/QuizContext';
import { Result } from './pages/Result';
import "./index.css"

function App() {
  return (
    <Router>
      <QuizProvider>
        <Switch>
          <Container>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
          </Container>
        </Switch>
      </QuizProvider>
    </Router>
  );
}

export default App;
