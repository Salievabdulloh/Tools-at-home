import { Suspense } from "react"
import { Route, Routes } from "react-router"
import { Page2,Page3,Page4,Page5,Page6,Page6,Page7,Page8, Home, Layout } from "./pages/lazy/lazy"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense><Layout /></Suspense>}>
          <Route index element={<Suspense><Home /></Suspense>} />
          <Route path="/page2" element={<Suspense><Page2 /></Suspense>} />
          <Route path="/page3" element={<Suspense><Page3 /></Suspense>} />
          <Route path="/page4" element={<Suspense><Page4 /></Suspense>} />
          <Route path="/page5" element={<Suspense><Page5 /></Suspense>} />
          <Route path="/page6" element={<Suspense><Page6 /></Suspense>} />
          <Route path="/page7" element={<Suspense><Page7 /></Suspense>} />
          <Route path="/page8" element={<Suspense><Page8 /></Suspense>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
