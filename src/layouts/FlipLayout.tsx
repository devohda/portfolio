import { motion, Variants } from "framer-motion";

import Navigator from "@/components/Header";
import styles from "./FlipLayout.module.css";

const FlipLayout = ({ children }: { children: React.ReactNode }) => {
	const anim = (variants: Variants) => {
		return {
			initial: "initial",
			animate: "animate",
			exit: "exit",
			variants,
		};
	};

	const containerAnim: Variants = {
		initial: { background: "white" },
		animate: { background: "white" },
		exit: { background: "black" },
	};

	const pageAnim: Variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 1 },
	};

	const pageShadowAnim: Variants = {
		initial: { opacity: 0, y: 0, display: "none" },
		animate: { opacity: 0, y: 0, display: "none" },
		exit: {
			opacity: 0.4,
			y: "-100%",
			display: "block",
			transition: {
				duration: 1.2,
				ease: [0.83, 0, 0.17, 1],
			},
		},
	};

	const coverAnim: Variants = {
		initial: { y: "100%" },
		animate: { y: "100%" },
		exit: {
			y: 0,
			transition: {
				duration: 1,
				ease: [0.83, 0, 0.17, 1],
			},
		},
	};

	const perspectiveAnim: Variants = {
		initial: { scale: 1, y: 0 },
		animate: { scale: 1, y: 0 },
		exit: {
			scale: 0.9,
			y: -120,
			opacity: 0.5,
			transition: {
				duration: 1.2,
				ease: [0.83, 0, 0.17, 1],
			},
		},
	};

	return (
		<motion.div {...anim(containerAnim)}>
			<motion.div {...anim(perspectiveAnim)}>
				<motion.div {...anim(pageAnim)}>
					<Navigator />

					{children}
				</motion.div>
			</motion.div>
			<motion.div
				className={styles.cover}
				style={{ background: "black" }}
				{...anim(pageShadowAnim)}
			/>
			<motion.div className={styles.cover} {...anim(coverAnim)} />
		</motion.div>
	);
};

export default FlipLayout;
