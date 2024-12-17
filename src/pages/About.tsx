import { Shield, Users, Building2, Scale } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Protection',
    description: 'We ensure robust protection of intellectual property rights in Sierra Leone.'
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Making IPR registration accessible to all creators and innovators.'
  },
  {
    icon: Building2,
    title: 'Innovation',
    description: 'Fostering innovation through strong intellectual property protection.'
  },
  {
    icon: Scale,
    title: 'Fairness',
    description: 'Ensuring fair and transparent IPR registration processes.'
  }
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Protecting Innovation in Sierra Leone
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Sierra Leone IPR Registration Office is dedicated to protecting intellectual property
            rights and fostering innovation across the nation. Our mission is to provide efficient
            and accessible registration services while promoting awareness of intellectual property rights.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <value.icon className="h-8 w-8 flex-none text-indigo-600" aria-hidden="true" />
                  {value.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}