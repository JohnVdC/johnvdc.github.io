import { AppShell } from "./components/layout/AppShell";
import { ProjectFeed } from "./components/feed/ProjectFeed";

function App() {
  return (
    <AppShell>
      <ProjectFeed />
    </AppShell>
  );
}

export default App;
