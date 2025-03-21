import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">SkyForge AI</h1>
            <p className="text-xl md:text-2xl mb-8">Building multilingual Foundational Models for Indian languages</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our AI Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                  In partnership with <a href="https://www.rekhta.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Rekhta Foundation</a> and <a href="https://usefindr.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Findr</a>, we are building multilingual Foundational Models for Indian languages.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through our platform, we provide state-of-the-art models for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                <li>Search and re-rank (SLMs)</li>
                <li>OCR (VLMs)</li>
                <li>Speech to Text models</li>
              </ul>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Rekhta Foundation</h3>
                <p className="text-gray-700 mb-4">
                  Our partnership with Rekhta Foundation brings expertise in language preservation and cultural heritage
                  digitization to our AI models.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.rekhta.org" target="_blank" rel="noopener noreferrer">
                    Visit Rekhta
                  </a>
                </Button>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Findr</h3>
                <p className="text-gray-700 mb-4">
                  Our collaboration with Findr enhances our search capabilities and helps us build more effective
                  semantic search models.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://usefindr.com" target="_blank" rel="noopener noreferrer">
                    Visit Findr
                  </a>
                </Button>
              </div>
            </div> */}

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our AI Technologies</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Search and Re-rank Models (SLMs)</h3>
                  <p className="text-gray-700">
                    Our specialized Small Language Models are optimized for search and re-ranking tasks, providing
                    high-quality results with minimal latency.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">OCR Vision Language Models (VLMs)</h3>
                  <p className="text-gray-700">
                    Our Vision Language Models excel at Optical Character Recognition for Indian languages, helping
                    digitize historical texts and documents.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Speech-to-Text Models</h3>
                  <p className="text-gray-700">
                    We're developing advanced speech recognition models specifically trained on Indian languages to
                    bridge the digital divide.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="/#contact" className="flex items-center gap-2">
                  Contact Us About AI Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

