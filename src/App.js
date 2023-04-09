import React, {useState} from 'react';
import './index.scss';
import Modal from './components/modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerOnClickOpen = () => {
    setIsOpen(true);
  }

  return (
    <div className="App">
      <button onClick={handlerOnClickOpen} className="open-modal-btn">✨ Открыть  модальное окно</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3>Это модальное окно</h3>
        <button>Это кнопка</button>
      </Modal>
    </div>
    );
}

export default App;
