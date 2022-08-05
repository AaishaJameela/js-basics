import React, {useState} from 'react';
import Contact from'./Contact.js';

const App = () => {
  const newData= "Header";
  const [click, setClick] = useState(0)
  return (
    //<div>
    //<Header />
    //<Sidebar />
    //<div>Hi, welcome to this page!</div>
    //<div><img src={pic} /></div>
    //<Footer />
    //</div>

    <center><div>
      <Contact data={newData} />
      <p>You have clicked {click} times.</p>
    <button onClick = {() => setClick(click + 1)}>Increment</button>
    <button onClick = {() => setClick(click - 1)}>Decrement</button>
    </div></center>
  )
  }

export default App;
