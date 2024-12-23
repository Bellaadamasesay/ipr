import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {Home, Services, Contact, TrackStatus, Resources, About, Register} from './pages'
import {Login, Profile, SignUp} from './pages/auth';
import { ToastProvider } from './components/ToastProvider';

export default function App() {
  return (
    <ToastProvider >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="track" element={<TrackStatus />} />
        <Route path="resources" element={<Resources />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/auth" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
    </ToastProvider>
  );
}

