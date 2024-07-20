import { Body, Common, Composite } from "matter-js";
import { useCallback, useEffect, useRef } from "react";

import RoundedBlocks from "@/constants/roundedBlocks";
import Walls from "@/constants/wall";
import { useMatter } from "@/utils/hooks/useMatter";

const IntroduceBackground = () => {
	const { containerRef, engine } = useMatter(1);

	const walls = useRef<Body[]>(Walls);
	const blockItems = useRef<Body[]>(RoundedBlocks);
	const svgBlockItems = useRef<Body[]>([]);

	const resetItems = useCallback(() => {
		blockItems.current.forEach((item) => {
			Body.setPosition(item, {
				x: Common.random(100, 1800),
				y: Common.random(-200, -500),
			});

			Body.setSpeed(item, 0);
			Body.setVelocity(item, { x: 0, y: 0 });
			Body.setAngle(item, 0);
			Body.setAngularVelocity(item, 0);

			Body.setAngle(item, Common.random(-Math.PI / 8, Math.PI / 8));
		});

		svgBlockItems.current.forEach((item) => {
			Body.setPosition(item, {
				x: Common.random(30, 1900),
				y: Common.random(-400, -600),
			});

			Body.setSpeed(item, 0);
			Body.setVelocity(item, { x: 0, y: 0 });
			Body.setAngle(item, 0);
			Body.setAngularVelocity(item, 0);

			Body.setAngle(item, Common.random(-Math.PI / 8, Math.PI / 8));
		});
	}, []);

	/**
	 * 1. 벽, 바닥을 추가한다.
	 * 2. 애니메이션을 실행한다.
	 *   2-1. 블록이 없으면 블록을 추가한다.
	 *   2-2. 블록이 있으면 블록을 초기화한다.(블록 위치를 상단으로 이동시킨다.)
	 * 3. 6초 후 벽, 바닥을 제거한다. (바닥을 제거하면 블록이 바닥으로 떨어진다.)
	 *
	 * 4초 후 애니메이션을 반복한다.
	 *
	 * 0초: 벽 추가, 블록 바닥으로 떨어짐
	 * 4초: 벽 제거, 블록 바닥 아래로 떨어짐
	 * 6초: 애니메이션 repeat
	 */
	const animate = useCallback(() => {
		if (!engine.current) return;

		// 벽, 바닥 추가
		Composite.add(engine.current.world, walls.current);

		resetItems();

		const blockId = blockItems.current?.[0].id;
		const isBlockExist =
			Composite.get(engine.current.world, blockId, "body") !== null;

		if (!isBlockExist) {
			Composite.add(engine.current.world, svgBlockItems.current);
			Composite.add(engine.current.world, blockItems.current);
		}
	}, [resetItems, engine]);

	useEffect(() => {
		if (engine.current) {
			animate();
		}
	}, [animate, engine]);

	return (
		<div
			ref={containerRef}
			className="absolute bottom-0 left-[50%] -z-[1] mx-auto w-[2000px] translate-x-[-50%]"
		/>
	);
};

export default IntroduceBackground;
