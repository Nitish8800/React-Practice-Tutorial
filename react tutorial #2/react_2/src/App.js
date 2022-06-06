import "./App.css";
function App() {
  let data = "Nitish Kumar";
  function apple() {
    data = "peter";
    alert(data);
  }
  return (
    <div className="App">

      <h1>{data}</h1>
      <button onClick={apple}>Click Me</button>
      
    </div>
  );
}

export default App;
