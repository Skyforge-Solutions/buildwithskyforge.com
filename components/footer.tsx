import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SkyForge</h3>
            <p className="text-gray-400 mb-4">Transforming ideas into powerful digital solutions</p>
            {/* <div className="flex space-x-4">
              <SocialIcon icon={Facebook} href="#" label="Facebook" />
              <SocialIcon icon={Twitter} href="#" label="Twitter" />
              <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
              <SocialIcon icon={Instagram} href="#" label="Instagram" />
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/#services">Web Development</FooterLink>
              <FooterLink href="/#services">App Development</FooterLink>
              <FooterLink href="/#services">Data Services</FooterLink>
              <FooterLink href="/#services">AI Services</FooterLink>
              <FooterLink href="/#services">SEO Optimization</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <FooterLink href="/#products">Real-time Speech Chatbots</FooterLink>
              <FooterLink href="/#products">Enterprise Semantic Search</FooterLink>
              <FooterLink href="/#products">QnA Chatbots</FooterLink>
              <FooterLink href="/#mvp">MVP Development</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span>aashay@skyforge.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span>+91 9625-880081</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span>
                  7349, D-7 Vasant Kunj
                  <br />
                  New Delhi, Delhi-110070
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SkyForge System Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon: Icon, href, label }: { icon: any; href: string; label: string }) {
  return (
    <a href={href} aria-label={label} className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
      <Icon className="h-5 w-5" />
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

