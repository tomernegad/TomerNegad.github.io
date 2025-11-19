import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center relative">
      <Canvas className="absolute inset-0">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 1, 1]} />
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
          />
        </Sphere>
      </Canvas>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold neon-text mb-4">Tomer Negad</h1>
        <p className="text-xl mb-8">Fullstack Junior Developer</p>
        <p className="text-lg max-w-2xl mx-auto">
          Passionate about creating innovative web applications with modern technologies.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 neon-border rounded-lg text-lg font-semibold"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;