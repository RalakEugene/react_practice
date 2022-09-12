
import React from 'react';
import './index.css';
import Students from './components/Students';
import { useState} from 'react';

function App() {
  const [role, setRole] = useState ('dev')
  const showStudents = true;
  return (
    <div className="App">
      {showStudents ? (
        <p>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }}/>
          <Students name="Gene" role="Front-end developer"/>
          <Students name="Sid" role={role}/>
          <Students name="Sam"/>
        </p>
      ) : (
        <p>there are no Students</p>
      )}
    </div>
  );
}

export default App;
