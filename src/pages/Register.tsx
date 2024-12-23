import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPRType } from '../types';
import { registerIPR } from '../services/registration'; 
import toast from 'react-hot-toast';
import { checkUserSession } from '../services/auth';

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [iprType, setIprType] = useState<IPRType>('patent');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [propertyname, setPropertyname] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await checkUserSession();
      } catch (error) {
        toast.error(`You are not logged in. Redirecting to login... ${error}`);
        navigate('/auth/login');
      }
    };
     verifyUser();
  }, []);

  const handleSubmit = async () => {
    const ownerId = 1; // Replace with actual user ID from your authentication system
    const result = await registerIPR(propertyname, description, ownerId, iprType);

    if (result.success) {
      toast.success(result.success ? 'Registered Successfully' : 'Error');
      // Optionally reset the form or navigate to a different page
    } else {
      toast.success(`Error: ${result.error}`);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Register Your IPR</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow the steps below to register your intellectual property.
          </p>

          <div className="mt-8">
            <div className="space-y-12">
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Step 1: Select IPR Type</h3>
                  <div className="mt-4">
                    <select
                      value={iprType}
                      onChange={(e) => setIprType(e.target.value as IPRType)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    >
                      <option value="patent">Patent</option>
                      <option value="trademark">Trademark</option>
                      <option value="copyright">Copyright</option>
                      <option value="trade-secret">Trade Secret</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Step 2: Personal Information</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Step 3: IPR Details</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title/Name of IPR
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={propertyname}
                        onChange={(e) => setPropertyname(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(2)}
                        className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                      >
                        Submit Registration
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}