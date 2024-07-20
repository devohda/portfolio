import Header from "@/components/Header";
import Introduce from "@/components/Introduce";

const IntroducePage = () => {
	return (
		<div className="relative min-w-[1200px]">
			{/* HEADER */}
			<Header />

			{/* NEW UPDATE */}
			<Introduce />
		</div>
	);
};

export default IntroducePage;
