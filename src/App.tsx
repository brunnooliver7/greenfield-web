import Frame from "./components/Frame"
import Menu from "./components/Menu"

function App() {
  return (
    <Frame>
      <div id="app" className="grid grid-cols-[200px_1fr] w-full h-full">
        <Menu />
        <div className='overflow-y-scroll scrollbar'>
        </div>
      </div>
    </Frame>
  )
}

export default App
