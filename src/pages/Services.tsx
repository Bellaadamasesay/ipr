import { Copyright, Bookmark, FileText, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Copyright,
    title: 'Copyright Registration',
    description: 'Protect your creative works including literary, musical, artistic, and dramatic works.',
    price: 'Starting from $50'
  },
  {
    icon: Bookmark,
    title: 'Trademark Registration',
    description: 'Register your brand identifiers including logos, symbols, and brand names.',
    price: 'Starting from $100'
  },
  {
    icon: FileText,
    title: 'Patent Registration',
    description: 'Secure your inventions and technological innovations with patent protection.',
    price: 'Starting from $200'
  },
  {
    icon: ShieldCheck,
    title: 'Trade Secret Protection',
    description: 'Establish legal protection for your confidential business information.',
    price: 'Starting from $150'
  }
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive IPR Protection Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of intellectual property registration and protection services
            tailored to meet your needs.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-gray-200 p-8 hover:border-indigo-600 transition-colors"
            >
              <div className="flex items-center gap-x-4">
                <service.icon className="h-8 w-8 flex-none text-indigo-600" />
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{service.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <p className="mt-6 font-semibold text-indigo-600">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}