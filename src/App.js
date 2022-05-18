import './App.css';
import ColorList from './components/color/ColorList';
import AddColorForm from './components/color/AddColorForm';

function App() {
  return (
    <div className="App">
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;
