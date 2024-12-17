import { BookOpen, FileText, HelpCircle, Video } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: 'IPR Guidelines',
    description: 'Comprehensive guides on intellectual property rights and protection.',
    href: '#'
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Forms, templates, and documentation required for IPR registration.',
    href: '#'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides on the registration process.',
    href: '#'
  },
  {
    icon: HelpCircle,
    title: 'FAQs',
    description: 'Answers to commonly asked questions about IPR registration.',
    href: '#'
  }
];

export default function Resources() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn About IPR Protection
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access our comprehensive collection of resources to learn more about intellectual
            property rights and the registration process.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="flex flex-col rounded-2xl border border-gray-200 p-8 hover:border-indigo-600 transition-colors"
            >
              <div className="flex items-center gap-x-4">
                <resource.icon className="h-8 w-8 flex-none text-indigo-600" />
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{resource.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}