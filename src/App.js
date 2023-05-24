import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <div>
      <h1 className='text-3xl'>Youtube App</h1>
      <Header />
      <Body />
      {/* 
      head
      body
        sidebar
          menueitems
        main-container
          buttons list 
          video-container
            video card

       */}
    </div>
  );
}

export default App;
