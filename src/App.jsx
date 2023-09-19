

import ActivityForm from '../src/component/Activity/ActivityForm'
import IndexActivity from './component/Activity';
import Navbar from "./component/Navbar";
import { Index } from './pages/Index/Index';


function App() {

  return (
    <div className="relative">
      <div className="z-50 absolute">
        <Navbar />
      </div>
      <div className="min-h-min z-0 relative">
        <Index />
      </div>
    </div>
  )


}
export default App;
