import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

// Try to import AOS, fallback to null if not available
let AOS = null;
try {
	AOS = require("aos");
	require("aos/dist/aos.css");
} catch (error) {
	console.log("AOS not available, using fallback animations");
}

const App = () => {
	// Initialize AOS with fallback
	useEffect(() => {
		if (AOS) {
			AOS.init({
				duration: 1000,
				easing: "ease-out-cubic",
				once: true,
				offset: 100,
				delay: 0,
				anchorPlacement: "top-bottom",
				disable: false,
				startEvent: "DOMContentLoaded",
				initClassName: "aos-init",
				animatedClassName: "aos-animate",
				useClassNames: false,
				disableMutationObserver: false,
				debounceDelay: 50,
				throttleDelay: 99
			});

			AOS.refresh();
		} else {
			document.body.classList.add("aos-fallback");
		}
	}, []);

	return (
		<>
			<div>
				<Header />
				<main>
					<Hero />
					<About />
					<Programs />
					<Partners />
					<Testimonials />
					<Faq />
					<CallToAction />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default App;
