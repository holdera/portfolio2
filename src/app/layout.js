import { poppins } from "./ui/fonts";
import "./ui/globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export const metadata = {
	title: "Homepage",
	description: "Lets see",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
