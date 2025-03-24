
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  stars: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, stars }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-subtle border border-gray-100 hover:shadow-elevated transition-all duration-300 h-full">
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <blockquote className="mb-4 text-wise-blue-800">"{content}"</blockquote>
      <div className="flex items-center mt-auto">
        <div className="rounded-full bg-wise-blue-100 h-10 w-10 flex items-center justify-center text-wise-blue-800 font-medium">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <div className="font-medium text-wise-blue-900">{author}</div>
          <div className="text-sm text-wise-blue-600">{role}</div>
        </div>
      </div>
    </div>
  );
};

const testimonials: TestimonialProps[] = [
  {
    content: "I saved nearly $500 compared to my bank when sending money to my family overseas. The process was incredibly fast and simple.",
    author: "Sarah Johnson",
    role: "Expat in Singapore",
    stars: 5
  },
  {
    content: "I use Swapster for my business payments to international suppliers. The transparency and speed have transformed our operations.",
    author: "Michael Chen",
    role: "Small Business Owner",
    stars: 5
  },
  {
    content: "As a freelancer working with international clients, Swapster has made getting paid so much easier and cheaper than traditional options.",
    author: "Elena Rodriguez",
    role: "Digital Freelancer",
    stars: 4
  },
  {
    content: "The multi-currency account is a game-changer for travelers. I can hold multiple currencies and spend like a local wherever I go.",
    author: "David Patel",
    role: "Frequent Traveler",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wise-blue-900">
            Trusted by millions worldwide
          </h2>
          <p className="text-lg text-wise-blue-700">
            See what our customers have to say about their experience with Swapster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              stars={testimonial.stars}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-wise-blue-50 rounded-full px-4 py-2 text-wise-blue-800">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-2" />
            <span className="font-medium">4.8/5 average rating across 100,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
