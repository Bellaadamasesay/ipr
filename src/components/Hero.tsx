import { ArrowRight, Copyright, BookText, Key } from 'lucide-react';
import IconCard from './ui/IconCard';
import Button from './ui/Button';
import './style.css'

const iprTypes = [
  { icon: Copyright, title: 'Copyright' },
  { icon: BookText, title: 'Trademark' },
  { icon: Key, title: 'Patents' },
  { icon: ArrowRight, title: 'Trade Secrets' },
];

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Protect Your Intellectual Property in Sierra Leone
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Register and manage your patents, trademarks, copyrights, and trade secrets through our
              streamlined online platform.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/register">Start Registration</Button>
              <Button href="/resources" variant="secondary">
                Learn More <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="h-full w-full bg-gray-50 object-cover lg:absolute lg:inset-0">
            <div className="h-full w-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 p-8">
                {iprTypes.map((type) => (
                  <IconCard key={type.title} icon={type.icon} title={type.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a  className="whats-app" href="https://wa.me/23232567458?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp my-float"></i>
        </a>
    </div>
  );
}