import './App.css';
import Header from './Components/Header';
import Demo from './Components/Demo';
import Home from './Components/Home';
function App() {
  return (
    <>
    <Header title="Voting"/>
    {/* <Header></Header> */}
    <Home></Home>
    <Demo></Demo>
    </>
  );
}

export default App;