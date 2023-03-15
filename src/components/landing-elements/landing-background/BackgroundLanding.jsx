import Particles from "react-tsparticles"
import { useCallback } from "react"
import { loadFull } from "tsparticles";
import options from "./BgParticlesOptions";

export const BackgroundLanding = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="particlesContainer">
    <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
    </div>
  );


}

export default BackgroundLanding