import { motion, Variants } from "framer-motion";

import Navigator from "@/components/Header";
import styles from "./FadeStairLayout.module.css";

const FadeStairLayout = ({ children }: { children: React.ReactNode }) => {
	const anim = (variants: Variants) => {
		return {
			initial: "initial",
			animate: "animate",
			exit: "exit",
			variants,
		};
	};

	const pageAnim: Variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 1 },
	};

	const coverAnim: Variants = {
		initial: {},
		animate: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
		exit: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const stairAnim: Variants = {
		initial: {
			y: 0,
		},
		animate: {
			y: "100%",
			transition: {
				duration: 0.5,
				ease: [0.83, 0, 0.17, 1],
			},
			transitionEnd: {
				y: "-100%",
			},
		},
		exit: {
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.83, 0, 0.17, 1],
			},
		},
	};

	return (
		<>
			<motion.div {...anim(pageAnim)}>
				<Navigator />

				{children}
			</motion.div>

			{/* 부모에서 variant 이름 변경 시 하위로 전달됨 */}
			{/* 자식에서 initial, animate, exit 를 다시 재정의하면 안 됨 */}
			<motion.div className={styles.cover} {...anim(coverAnim)}>
				<motion.div className={styles["cover-stair"]} variants={stairAnim} />
				<motion.div className={styles["cover-stair"]} variants={stairAnim} />
				<motion.div className={styles["cover-stair"]} variants={stairAnim} />
				<motion.div className={styles["cover-stair"]} variants={stairAnim} />
				<motion.div className={styles["cover-stair"]} variants={stairAnim} />
			</motion.div>
		</>
	);
};

export default FadeStairLayout;
