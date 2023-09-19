import ActivityForm from '../src/component/Activity/ActivityForm'
import IndexActivity from './component/Activity';
import Navbar from "./component/Navbar";
import { Index } from './pages/Index/Index';


function App() {

  return (
    <div className="flex justify-betwee min-h-screen  bg-slate-300">
      <div >
        <Navbar />
      </div>
      <div >
        <Index />
      </div>
    </div>
  )


}
export default App;
