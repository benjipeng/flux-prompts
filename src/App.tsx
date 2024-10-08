import { ThemeProvider, useTheme } from './hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

interface FluxCard {
  id: number
  prompt: string
  imageUrl: string
}

const sampleCards: FluxCard[] = [
  { id: 1, prompt: "A serene lake at sunset", imageUrl: "/placeholder.svg?height=200&width=300" },
  { id: 2, prompt: "A futuristic cityscape", imageUrl: "/placeholder.svg?height=200&width=300" },
  { id: 3, prompt: "An enchanted forest", imageUrl: "/placeholder.svg?height=200&width=300" },
  { id: 4, prompt: "A cosmic nebula", imageUrl: "/placeholder.svg?height=200&width=300" },
  { id: 5, prompt: "An underwater coral reef", imageUrl: "/placeholder.svg?height=200&width=300" },
  { id: 6, prompt: "A steampunk airship", imageUrl: "/placeholder.svg?height=200&width=300" },
]

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold font-display">Flux Gallery</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </header>
      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCards.map((card) => (
            <div key={card.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Prompt #{card.id}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{card.prompt}</p>
              </div>
              <img src={card.imageUrl} alt={card.prompt} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default function AppWithTheme() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}