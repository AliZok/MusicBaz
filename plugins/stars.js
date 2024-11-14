// plugins/stars.js
import * as THREE from 'three';

export default (context, inject) => {
  inject('createStarField', (audioElement) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const stars = [];
    for (let i = 0; i < 1000; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 24, 24);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = [Math.random() * 2000 - 1000, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000];
      star.position.set(x, y, z);
      stars.push(star);
      scene.add(star);
    }

    camera.position.z = 5;

    // Setup audio analyzer
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function animate() {
      requestAnimationFrame(animate);

      if (audioElement && !audioElement.paused) {
        // Analyze the audio data
        analyser.getByteFrequencyData(dataArray);

        // Update star positions based on audio
        stars.forEach((star, index) => {
          const scale = dataArray[index % dataArray.length] / 128; // Normalize the values
          star.scale.set(scale, scale, scale); // Resize star based on frequency data
        });
      }

      renderer.render(scene, camera);
    }

    animate();
  });
};