import { Routes, Route } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { ProjectFeed } from "./components/feed/ProjectFeed";
import { NeuroMatrix } from "./projects/neuro-matrix/NeuroMatrix";

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<ProjectFeed />} />
        <Route path="/neuro-matrix" element={<NeuroMatrix />} />
      </Routes>
    </AppShell>
  );
}

export default App;
