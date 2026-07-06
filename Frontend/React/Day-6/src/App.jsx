import { useState } from 'react';
import Login from './assets/Components/login'
import Register from './assets/Components/Register'
import Dashboard from './assets/Components/Dashboard';

const App = () => {

  const [toggle, setToggle] = useState(true);

  const [users, setusers] = useState([]);

  const [formData, setFormData] = useState({});

  return (
    <div>
        <Register setFormData={setFormData} formData={formData} setusers={setusers}/>
        {users.map((ele, index) => (
          <Dashboard
              key={index}
              user={ele}
          />
      ))}
    </div>

  )
}

export default App