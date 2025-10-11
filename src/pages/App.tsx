import { Navbar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "@/pages/home/Home";
import Settings from "@/pages/settings/Settings";
import Cart from "@/pages/cart/Cart";

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Router>
				<header className='flex flex-grow justify-between p-2'>
					<Navbar />
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</main>
			</Router>
		</ThemeProvider>
	);
}

export default App;
