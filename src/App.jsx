import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Aquivio from "./projects/Aquivio";
import EVTOL from "./projects/EVTOL";
import PickPlace from "./projects/PickPlace";
import EmbeddedSentry from "./projects/EmbeddedSentry";
import Processor120 from "./projects/Processor120";
import Modula from "./projects/Modula";
import MusicApp from "./projects/MusicApp";
import Calculator from "./projects/Calculator";
import TicTacToe from "./projects/TicTacToe";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/kyle-wang" element={<Home />} />
                <Route path="/aquivio" element={<Aquivio />} />
                <Route path="/evtol" element={<EVTOL />} />
                <Route path="/pickandplace" element={<PickPlace />} />
                <Route path="/embeddedsentry" element={<EmbeddedSentry />} />
                <Route path="/processor120" element={<Processor120 />} />
                <Route path="/modula" element={<Modula />} />
                <Route path="/musicapp" element={<MusicApp />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
            </Routes>
        </div>
    )
}

export default App

