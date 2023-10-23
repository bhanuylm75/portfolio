import Particles from "react-tsparticles";
import { particleconfig } from "./particlesconfig";
function Main() {
  return (
    <div>
      <Particles params={particleconfig}></Particles>
    </div>

  );
}

export default Main;