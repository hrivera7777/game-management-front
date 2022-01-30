import NavBar from "./Layout/Navbar";
import Grid from "./Layout/Grid";

function App() {
  return (
    <div>
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        <Grid />
      </div>
    </div>
  );
}

export default App;
