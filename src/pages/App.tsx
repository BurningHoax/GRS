import { Navbar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Home from "@/pages/home/Home";

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<header className='flex'>
				<Navbar />
			</header>
			<main>
				<Home />
			</main>
			<footer className='text-right'>
				<p>Made by BurningHoax</p>
			</footer>
		</ThemeProvider>
	);
}

export default App;
