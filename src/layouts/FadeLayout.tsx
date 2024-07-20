import Navigator from "@/components/Header";
import { motion } from "framer-motion";

const FadeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Navigator />

			{children}
		</motion.div>
	);
};

export default FadeLayout;
