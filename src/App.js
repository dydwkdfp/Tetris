import './App.css';
import Mainpage from './page/Mainpage';
import StarterPage from './page/Starterpage';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';


function StartPage(){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <StarterPage/>
      </motion.div>
  );
};

function GamePage(){
  return (
    <motion.div initial =  {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Mainpage/>
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
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
