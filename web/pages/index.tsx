import { foo } from "@monorepo-babel/lib/src"
import { bar } from "../common/lib"

const Home = () => (
  <div>
    <p>Imported from relative path: {bar}</p>
    <p>Imported from monorepo sibling: {foo}</p>
  </div>
)

export default Home
