import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">SkyForge System Solutions</h1>
            <p className="text-xl md:text-2xl mb-8">Transforming ideas into powerful digital solutions</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button  asChild size="lg" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
                <Link href="#contact">Contact Us</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <service.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MVP Development Section */}
      <section id="mvp" className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Fast MVP Development Service</h2>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-xl mb-6 text-center">Get your MVP in up to 5 weeks*</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Base Package</h3>
                <p className="text-3xl font-bold mb-2">$1,500</p>
                <p className="mb-4">For 5 features</p>
                <ul className="space-y-2">
                  {[
                    "Core functionality",
                    "User authentication",
                    "Basic dashboard",
                    "Data storage",
                    "Responsive design",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Add-ons</h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold mb-2">$500</p>
                  <p>Payment gateway integration</p>
                </div>
                <div>
                  <p className="text-xl font-bold mb-2">Custom Features</p>
                  <p>Contact us for custom feature pricing</p>
                </div>
              </div>
            </div>
            <p className="text-sm italic">* Depending on number of features</p>
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Pages Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>SkyForge AI</CardTitle>
                <CardDescription>Multilingual Foundational Models for Indian languages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  In partnership with Rekhta Foundation and Findr, we are building state-of-the-art models for search,
                  re-rank, OCR, and speech-to-text.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ai" className="flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Language Services</CardTitle>
                <CardDescription>Comprehensive language and digitization solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  From voice & speech data solutions to digitization services, we offer expertise in low-resource
                  language data collection and processing.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/language-services" className="flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies to meet your business needs.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for Android and iOS platforms.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    title: "Data Services",
    description: "Large-scale web scraping and building scalable data pipelines for your business.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: "Software Maintenance",
    description: "Ongoing support and maintenance to keep your software running smoothly.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Feature Addition",
    description: "Enhance your existing software with new features and functionality.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 2v20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "AI Services",
    description: "Pre-training, fine-tuning, optimization, quantization, and deployment of AI models.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 2a8 8 0 0 1 8 8v12H4V10a8 8 0 0 1 8-8z" />
        <path d="M9.5 2A12.5 12.5 0 0 0 2 9.5" />
        <path d="M14.5 2A12.5 12.5 0 0 1 22 9.5" />
        <path d="M8 21v-4" />
        <path d="M16 21v-4" />
        <path d="M12 21v-8" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description: "Improve your website's visibility and ranking in search engine results.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Building Large Datasets",
    description: "Creation and management of large-scale datasets for various applications.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Language Solutions",
    description: "Translation, localization, and transcription services for global reach.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M5 8l6 6" />
        <path d="M4 14h7" />
        <path d="M2 5h12" />
        <path d="M7 2v3" />
        <path d="M22 22l-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    ),
  },
  {
    title: "Voice & Speech Data Solutions",
    description: "Voice-overs, data collection, and annotation for all major languages.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Digitization Services",
    description: "Digital archiving for books, manuscripts, and corporate data.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    title: "Recommendation Systems",
    description: "Build intelligent recommendation engines for your products and services.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Payment Gateway Integration",
    description: "Seamless integration of payment gateways for your e-commerce applications.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
]

const products = [
  {
    title: "Real-time Speech Chatbots",
    subtitle: "Conversational AI",
    description:
      "Advanced speech-enabled chatbots that provide natural, real-time interactions for customer service and support applications.",
  },
  {
    title: "Enterprise Semantic Search",
    subtitle: "21M+ docs with <500ms latency",
    description:
      "Large-scale enterprise semantic search application capable of searching through millions of documents with sub-second response times.",
  },
  {
    title: "QnA Chatbots",
    subtitle: "Speech and text interfaces",
    description:
      "Intelligent question-answering chatbots for exams, customer service, and other applications with both speech and text interfaces.",
  },
]

function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}

