import './App.css';
import { Switch, Route } from 'react-router-dom'
import BlogPage from './BlogPage'
import Home from './Home'
import ContactPage from './ContactPage'
import ProjectPage from './ProjectPage'
import NavBar from './NavBar'

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/contact'>
        <ContactPage />
      </Route>
      <Route path='/blogs'>
        <BlogPage />
      </Route>
      <Route path='/projects'>
        <ProjectPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
