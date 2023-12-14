import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeView from "./views/HomeView";
import PlaceView from "./views/PlaceView";
import MomentView from "./views/MomentView";
import FindUsView from "./views/FindUsView";

const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/place" element={<PlaceView />} />
        <Route path="/moment" element={<MomentView />} />
        <Route path="/find_us" element={<FindUsView />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
