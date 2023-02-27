import './App.css';
import IndexLayout from './layouts/IndexLayout/IndexLayout';
import MainLayout from './layouts/MainLayout/MainLayout'
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
