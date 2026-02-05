import { Euler, MathUtils, Vector3 } from "three";

export const getRandomCoordinate = (range: number) => {
  const vector = new Vector3();
  const x = Math.random() * range - range / 2;
  const y = Math.random() * range - range / 2;
  const z = Math.random() * range - range / 2;
  vector.set(x, 0.6, z);
  return vector;
};

export const getRandomRotation = (range: number) => {
  const euler = new Euler();
  const y = MathUtils.degToRad(Math.random() * range);
  euler.set(0, y, 0);
  return euler;
};