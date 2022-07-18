import Spinner from "./components/spinner/Spinner";
import Checkbox from "./components/checkbox/Checkbox";

function App() {
  return (
    <main
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "200px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Spinner />
      <Checkbox />
    </main>
  );
}

export default App;
