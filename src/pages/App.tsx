import Home from "@/pages/home/Home";

import { Navbar } from "@/components/nav-bar";

function App() {
  return (
    <>
      <header >
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer className = "text-right">
        <p>Made by BurningHoax</p>
      </footer>
    </>
  );
}

export default App;
