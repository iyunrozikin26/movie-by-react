import "./App.css";
import "./style/landingpage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
    return (
        <div>
            {/* intro */}
            <div className="myBG border">
                <NavigationBar />
                <Intro />
            </div>
            <div className="trending">
                <Trending />
            </div>
            <div className="superhero">
                <Superhero />
            </div>
        </div>
    );
}

export default App;
