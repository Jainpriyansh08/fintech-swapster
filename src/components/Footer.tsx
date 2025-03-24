
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const FooterColumn: React.FC<{
  title: string;
  links: Array<{ label: string; href: string }>;
}> = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-wise-blue-900">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-wise-blue-700 hover:text-wise-teal-500 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "News", href: "#" },
        { label: "Contact", href: "#" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "Send money", href: "#" },
        { label: "Multi-currency account", href: "#" },
        { label: "Debit card", href: "#" },
        { label: "Business account", href: "#" },
        { label: "Currency converter", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Help center", href: "#help" },
        { label: "Currency encyclopedia", href: "#" },
        { label: "Exchange rate alerts", href: "#" },
        { label: "Travel guides", href: "#" },
        { label: "Blog", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy policy", href: "#" },
        { label: "Cookie policy", href: "#" },
        { label: "Terms of use", href: "#" },
        { label: "Legal disclosures", href: "#" },
        { label: "Accessibility", href: "#" }
      ]
    }
  ];

  return (
    <footer id="help" className="bg-wise-light py-12 md:py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <span className="text-2xl font-bold bg-gradient-to-r from-wise-blue-800 to-wise-teal-500 bg-clip-text text-transparent">Swapster</span>
              </a>
              <p className="mt-4 text-wise-blue-700">
                The cheaper, faster way to send money abroad.
              </p>
            </div>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-wise-blue-600 hover:text-wise-teal-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-wise-blue-600 hover:text-wise-teal-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-wise-blue-600 hover:text-wise-teal-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-wise-blue-600 hover:text-wise-teal-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-wise-blue-600 hover:text-wise-teal-500 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            
            <div>
              <p className="text-sm text-wise-blue-600">
                © {currentYear} Swapster. All rights reserved.
              </p>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <FooterColumn 
              key={index} 
              title={section.title} 
              links={section.links} 
            />
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-wise-blue-600">
            Swapster is a fictional brand created for demonstration purposes. This is not a real financial service.
            Any resemblance to real companies is coincidental. In a real implementation, this would include 
            important regulatory information and licenses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
