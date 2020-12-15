import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <div className="App">
    <div className="App-header">
      <h2>welcome</h2>
      <div>
      <h5>Username</h5>
      <input type="text" classname="input" name="username">
      </input>
    </div>
    <div classname="input-group">
      <div classname="icon">
      <i vlassname="fa fa-lock"></i>
      </div>
    </div>
    <div>
      <h5>Password</h5>
      <input type="password" classname="input" name="pwd"></input>
    </div>
    <div>
      <a href="file:///E:/reactdemo/my-app/src/h.html"><button className="login" >登入</button></a>

    </div>
  </div>
    <p className="App-intro">
    欢迎来到<code>react</code> 登入界面 
    </p>
  </div>

  </body>

  );
}

export default App;
