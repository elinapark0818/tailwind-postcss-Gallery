import logo from "./logo.svg";
import "./App.css";
import Props from "./components/props";

function App() {
  const ramen = [
    "까르보불닭",
    "진순이",
    "너구리",
    "짜파게티",
    "간짬뽕",
    "신라면",
  ];

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        내가 지금 먹고 싶은 라면은? {ramen[getRandomIndex(ramen.length)]}
      </header>
      <main>
        <Props />
      </main>
    </div>
  );
}

export default App;
