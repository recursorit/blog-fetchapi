import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import Top from './Top'
import Bottom from './Bottom';
import Banner from './Banner';
function App() {
  return (
    <div>
      <Top />
      <Banner/>
      <Data />
      <Bottom />
    </div>
  );
}

export default App;
