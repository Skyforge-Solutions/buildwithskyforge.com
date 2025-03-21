import type React from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LanguageServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Language Services</h1>
            <p className="text-xl md:text-2xl mb-8">Comprehensive language and digitization solutions</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Language Expertise</h2>
              <p className="text-lg text-gray-700 mb-6">
                We have partnered with <a href="https://www.rekhta.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Rekhta Foundation</a> to provide their expertise in digitisation, indexing, data
                collection, and large scale dataset curation for speech and textual data.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Voice & Speech Data Solutions</h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  We offer voice-overs and data collection services, partnered with Bhashini, MeitY (Govt. of India) for
                  AI4Bharat - IIT Madras, Computer Science Department to bring about India's AI-powered Multilingual
                  Digital Transformation.
                </p>
                <ul className="space-y-4">
                  <ListItem>Expertise in low-resource language data collection</ListItem>
                  <ListItem>
                    Automated Speech Recognition Project - collected speech data of 1000+ Sindhi native language
                    speakers across 8 districts in India, collecting 600 hrs of voice data and transcribing 200+ hours
                    of data
                  </ListItem>
                  <ListItem>
                    Collected 500 hours of speech data across 15 districts in India of 1000+ native Urdu language
                    speakers and transcribed 450 hrs of data
                  </ListItem>
                  <ListItem>
                    35+ team members involved in the Speech Data Collection, Quality Assurance, Annotation and Review
                    process
                  </ListItem>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Audiobooks & Podcasts</h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  We produce high-quality audiobooks in Tamil, Hindi, Urdu, Bengali for Audible, Storytel, Alexa, and
                  Rekhta Podcasts on Amazon, Spotify, Apple.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Language Solutions</h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  Translation, localization, transcription, and more for clients like UNESCO and DesiCrew Pvt. Ltd.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Digitization Services</h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  Digital archiving for books, manuscripts, corporate data, and policy documents
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Our Impact</h3>
                    <ul className="space-y-2">
                      <ListItem>Total Pages Digitized: 84 million</ListItem>
                      <ListItem>Team Size: 100+</ListItem>
                      <ListItem>Machines Deployed: 85+</ListItem>
                      <ListItem>
                        Libraries: Digitized rare books and manuscripts in 60+ libraries and personal collections of
                        writers across 30+ cities in India
                      </ListItem>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Prominent Libraries</h3>
                    <ul className="space-y-2">
                      <ListItem>Khuda bakhsh Oriental Public Library, Patna</ListItem>
                      <ListItem>Rampur Raza library, Rampur</ListItem>
                      <ListItem>Iqbal Library, Bhopal</ListItem>
                      <ListItem>Public Library, Sardarshahar, Rajasthan</ListItem>
                      <ListItem>Government Nizamia Tibbi College, Hyderabad</ListItem>
                      <ListItem>Bharatiya Bhasha Parishad, Kolkata</ListItem>
                    </ul>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  Rekhta also has extensive experience in building world-class dictionaries for languages.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="/#contact" className="flex items-center gap-2">
                  Contact Us About Language Services
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

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
      <span className="text-gray-700">{children}</span>
    </li>
  )
}

