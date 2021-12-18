import logo from './images/image02.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Nader Barka</h1>
          <br />
          <img src={logo} className="pubimg"  />
          <br />
          <img src="/images/image01.jpg" className="srcimg"   />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
