import { Navbar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Home from "@/pages/home/Home";

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<header className='flex flex-grow justify-between p-2'>
				<Navbar />
			</header>
			<main>
				<Home />
			</main>
			<footer>
				<p>Made by BurningHoax</p>
			</footer>
		</ThemeProvider>
	);
}

export default App;
