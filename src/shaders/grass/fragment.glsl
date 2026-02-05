uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;
varying float modelPositionY;

void main() {
  vec4 textureColor = texture2D(uTexture, vUv);
  vec3 color = mix(vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), modelPositionY);
  gl_FragColor = vec4(color, textureColor.r);
}