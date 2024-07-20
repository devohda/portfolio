import { Bodies } from 'matter-js';

const WALL_THICKNESS = 5;
const CONTAINER_WIDTH = 2000;
const CONTAINER_HEIGHT = 1204;

const WALL_OPTIONS = {
  isStatic: true,
  render: {
    fillStyle: 'transparent',
  },
};

const Walls = [
  Bodies.rectangle(
    CONTAINER_WIDTH / 2,
    -CONTAINER_HEIGHT + WALL_THICKNESS / 2,
    CONTAINER_WIDTH,
    WALL_THICKNESS,
    WALL_OPTIONS
  ), // 상단 벽,

  Bodies.rectangle(
    CONTAINER_WIDTH / 2,
    CONTAINER_HEIGHT - WALL_THICKNESS / 2,
    CONTAINER_WIDTH,
    WALL_THICKNESS,
    WALL_OPTIONS
  ), // 하단 벽

  Bodies.rectangle(
    WALL_THICKNESS / 2,
    0,
    WALL_THICKNESS,
    CONTAINER_HEIGHT * 2,
    WALL_OPTIONS
  ), // 좌측 벽

  Bodies.rectangle(
    CONTAINER_WIDTH - WALL_THICKNESS / 2,
    0,
    WALL_THICKNESS,
    CONTAINER_HEIGHT * 2,
    WALL_OPTIONS
  ), // 우측 벽
];

export default Walls;
