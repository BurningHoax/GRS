import Home from "@/pages/home/Home";

import { Navbar } from "@/components/nav-bar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <p>made by BurningHoax</p>
      </footer>
    </>
  );
}

export default App;
