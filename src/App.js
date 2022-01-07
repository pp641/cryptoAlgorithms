import "./App.css";
import AllCryptoAlgorithms from "./CryptoAlgorithms/AllCryptoAlgorithms";
import AllHashingAlgorithms from "./HashingAlgrithms/AllHashingAlgorithms";

function App() {
  return (
    <div>
      <h1>Encryption Algorithms :: </h1>
      <AllCryptoAlgorithms />
      <h1>Hashing Algorithms :: </h1>
      <AllHashingAlgorithms />
    </div>
  );
}

export default App;
