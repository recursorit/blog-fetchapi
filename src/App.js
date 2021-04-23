import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import Top from './Top'
import Bottom from './Bottom';
import Banner from './Banner';
import './CardStyle.css';
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
