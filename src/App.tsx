import * as React from 'react'

import { ToolCard } from './components/ToolCard/ToolCard'

function App() {
  return (
    <div className="text-gray-100">
      <div className="py-4 sm:py-12 px-2 sm:px-3 lg:px-4 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-wide uppercase">Tooly</h2>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-5">
          <ToolCard
            title="Slugger"
            description="Smart, fast and easy to use online tool built to generate search engine friendly and user friendly URL
              slugs."
          />
          <ToolCard
            title="Base64 Decode & Encode"
            description="Use our super handy online tool to encode or decode your data."
          />
        </div>
      </div>
    </div>
  )
}

export default App
