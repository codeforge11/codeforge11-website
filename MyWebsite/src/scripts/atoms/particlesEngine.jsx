import { loadSlim } from '@tsparticles/slim'

const ParticlesInit = async (engine) => {
  await loadSlim(engine)
}

export default ParticlesInit