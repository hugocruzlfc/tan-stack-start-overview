import HomeContainer from '@/components/home-container'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="max-w-7xl p-10 mx-auto">
      <HomeContainer />
    </div>
  )
}
