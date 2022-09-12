
import './App.css';
import Students from './components/Students';

function App() {
  const showStudents = true;
  return (
    <div className="App">
      {showStudents ? (
        <p>
          <Students/>
          <Students/>
          <Students/>
        </p>
      ) : (
        <p>there are no Students</p>
      )}
    </div>
  );
}

export default App;
