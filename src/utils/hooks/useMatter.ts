import {
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from 'matter-js';
import { useEffect, useRef } from 'react';

export const useMatter = (gravity = 1) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matter.js Engine 객체(물리 엔진)
  const engine = useRef<Engine | null>();

  useEffect(() => {
    const init = () => {
      const currentScene = containerRef.current;

      if (!currentScene) return;

      if (engine.current) {
        return () => {
          return;
        };
      }

      // 물리 엔진 생성
      engine.current = Engine.create();
      engine.current.gravity.y = gravity;

      const render = Render.create({
        element: currentScene,
        engine: engine.current,
        options: {
          width: 2000,
          height: 1204,
          wireframes: false,
          background: 'transparent',
        },
      });

      // 물리 엔진 실행
      Runner.run(engine.current);
      // 캔버스 렌더링 실행
      Render.run(render);

      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine.current, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

      World.add(engine.current.world, mouseConstraint);

      // 컴포넌트 unmount 시 메모리 누수 방지
      return () => {
        console.log('Cleaning up Matter.js engine');
        if (!engine.current) return;

        Render.stop(render);
        World.clear(engine.current.world, false);
        Engine.clear(engine.current);
        render.canvas.remove();
        render.canvas = null as unknown as HTMLCanvasElement;
        render.context = null as unknown as CanvasRenderingContext2D;
        render.textures = {};
        engine.current = null;
      };
    };

    const cleanup = init();

    return () => {
      if (cleanup) cleanup();
    };
  }, [gravity]);

  return { engine, containerRef, canvasRef };
};
