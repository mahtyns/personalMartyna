import Particles from "react-tsparticles"
import { useCallback } from "react"
import { loadFull } from "tsparticles";
import { aboutOptions } from "./aboutOptions";


const AboutGraphics = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
    <Particles id="aboutParticles" init={particlesInit} loaded={particlesLoaded} options={aboutOptions} />
    </>
  )
}

export default AboutGraphics