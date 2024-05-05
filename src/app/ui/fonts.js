import { Poppins, Lusitana } from "next/font/google";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

export const lusitana = Lusitana({
	weight: ["400", "700"],
	subsets: ["latin"],
});
