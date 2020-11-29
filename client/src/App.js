import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Crud Application </h1>
      <div className="form">
        <label>Move Name:</label>
        <input type="text" name="movieName" />
        <label>Move Review:</label>
        <input type="text" name="review" />

        <button className="submit-btn">Submit</button>
      </div>  
    </div>
  );
}

export default App;
