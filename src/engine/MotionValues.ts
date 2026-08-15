import { motionValue, MotionValue } from 'framer-motion';

// Global shared motion values - updating these NEVER triggers a React re-render
export const globalScrollY: MotionValue<number> = motionValue(0);
export const globalProgress: MotionValue<number> = motionValue(0);
export const globalVelocity: MotionValue<number> = motionValue(0);
export const globalScrollDirection: MotionValue<number> = motionValue(1); // 1 = down, -1 = up
