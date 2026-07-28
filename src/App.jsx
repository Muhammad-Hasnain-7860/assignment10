import MyAppRouter from "./router/MyAppRouter"
import { Toaster } from "react-hot-toast"
const App = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col gap-7">
      <MyAppRouter />

      <Toaster
        position="top-right"
        reverseOrder={false} />
    </div>
  )
}

export default App