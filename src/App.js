import React from 'react';
import Main from './pages/main'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Como vai o tempo ?</h1>
      <Main />

      <div className="footer">
        <h2 >Desenvolvido com muito
         <i className="fas fa-mug-hot"></i>
          por
         <a href="https://github.com/teckthor">
            Ademar Cardoso
         </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
