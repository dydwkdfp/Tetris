import './App.css';
import Mainpage from './page/Mainpage';
import StarterPage from './page/Starterpage';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';


function StartPage(){
  return (
    <motion.div initial =  {{scale: 0.9}} animate={{scale: 1}} exit={{scale: 0.9}}>
      <StarterPage/>
      </motion.div>
  );
};

function GamePage(){
  return (
    <motion.div initial =  {{scale: 0.9}} animate={{scale: 1}} exit={{scale: 0.9}}>
        <Mainpage/>
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route path="/StartPage">
        <StartPage />
      </Route>
      <Route path="/GamePage">
          <GamePage />
      </Route>
      <Route path="/">
        <Redirect to="StartPage" />
      </Route>
    </Switch>
    </AnimatePresence>
  );
};


export default App;
