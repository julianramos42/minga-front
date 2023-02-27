import './App.css';
import IndexLayout from './layouts/IndexLayout/IndexLayout';
import Index from '../src/components/Index/Index';

function App() {
  return (
    <div className="App">
      <IndexLayout>
        <Index />
      </IndexLayout>
    </div>
  );
}

export default App;
