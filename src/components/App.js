import '../App.css';
import { Switch, Route } from 'react-router-dom'
import BlogContainer from './BlogContainer'
import Home from './Home'
import ContactPage from './ContactPage'
import ProjectPage from './ProjectPage'
import NavBar from './NavBar'

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route path='/contact'>
        <ContactPage />
      </Route>
      <Route path='/blogs'>
        <BlogContainer />
      </Route>
      <Route path='/projects'>
        <ProjectPage />
      </Route>
      <Route exact path=''>
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
