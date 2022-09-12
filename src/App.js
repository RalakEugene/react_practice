
import React from 'react';
import './index.css';
import Students from './components/Students';
import { useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showStudents = true;
  return (
    <div className="App">
      {showStudents ? (
        <p>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }}/>
          <div className='flex flex-wrap justify-center'>
            <Students name="Gene" role="Front-end developer" img="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Students name="Sid" role={role} img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Students name="Sam" img="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Students name="Bose" img="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Students name="Allan" img="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Students name="Alvin" img="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Students name="Pete" img="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
            <Students name="Blake" img="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          </div>
        </p>
      ) : (
        <p>there are no Students</p>
      )}
    </div>
  );
}

export default App;
