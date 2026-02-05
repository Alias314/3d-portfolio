uniform float uTime;

varying vec2 vUv;
varying float vElevation;
varying float modelPositionY;

void main() {
  float frequency = 10.0;
  float scale = 0.1;
  float speed = 2.0;
  
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  float elevation = sin(modelPosition.y * frequency + (uTime * speed)) * scale;
  elevation += sin(modelPosition.x * frequency + (uTime * speed)) * scale;
  modelPosition.z += elevation * modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  vUv = uv;
  vElevation = elevation;
  modelPositionY = modelPosition.y;
}