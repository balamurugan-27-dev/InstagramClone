import SideBar from './SideBar'
function App() {
  return (
    <div className="d-flex vh-100 bg-secondary">
    <div className="w-20">
       <SideBar/>
    </div>
    <div className="w-50 bg-primary">feed</div>
    <div className="w-30">suggestion</div>
    </div>
  );
}

export default App;