import { useLocation, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const CLINIC_INFO = {
  name: 'Dr. Sandeep Rathariya',
  specialty: 'Dental Specialist',
  qualifications: 'BDS, MDS - Orthodontics',
  regNumber: 'Dental Council Reg: KA-4521',
  address: '123 Healthcare Avenue, Medical District',
  phone: '+91 98765 43210',
  email: 'dr.sandeep@dentalcare.com',
  clinicName: 'Smile Care Dental Clinic',
  workingHours: 'Mon-Sat: 10:00 AM - 8:00 PM',
  experience: '15+ Years of Excellence',
  specializations: [
    'Orthodontics',
    'Cosmetic Dentistry',
    'Dental Implants',
    'Root Canal Treatment',
  ],
  branches: [
    {
      city: 'GURGAON',
      address:
        'C-14, Sector 43, Sushant Lok Phase 1, Gurugram-122003',
    },
    {
      city: 'NEW DELHI',
      address:
        'B-18, Balbir Saxena Marg, Block B, Gulmohar Park, Delhi-110049',
    },
  ],
};

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;
  const receiptRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current!,
    documentTitle: `${formData.patientName}_${formData.disease}`,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Prescription Paper */}
        <div
          ref={receiptRef}
          className="bg-white border border-gray-300 shadow-lg rounded-lg relative"
          style={{
            width: '210mm', // A4 width
            height: '297mm', // A4 height
            padding: '10mm',
            fontFamily: "'Poppins', sans-serif",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/pattern.png')]"></div>
           {/* Background Pattern */}
           <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/stomatologist-doctor-explaining-proper-dental-hygiene-patient-holding-sample-human-jaw_158595-7678.jpg?t=st=1742036478~exp=1742040078~hmac=1584811bd9e36caea8f5e0d151af918aa65fe97a93810b425360978cfed2e072&w=996')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.05, // Subtle background effect
              zIndex: -1,
            }}
          ></div>

          {/* Left Side Logo */}
          <img
            src="https://img.freepik.com/premium-vector/love-heart-smile-happy-logo-design-inspiration_573037-557.jpg?w=740"
            alt="Clinic Logo"
            className="imglogo"
          />

          {/* Header Section */}
          <div className="border-b border-gray-300 pb-6 mt-6">
            {/* Clinic Info */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-green-700 tracking-wide">
                  {CLINIC_INFO.clinicName}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {CLINIC_INFO.address}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> {CLINIC_INFO.phone} |{' '}
                  <strong>Email:</strong> {CLINIC_INFO.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Working Hours:</strong>{' '}
                  {CLINIC_INFO.workingHours}
                </p>
              </div>

              {/* Doctor's Info */}
              <div className="text-right">
                <h3 className="text-lg font-bold text-green-700">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {CLINIC_INFO.qualifications}
                </p>
                <p className="text-gray-600 text-sm">
                  {CLINIC_INFO.specialty}
                </p>
                <p className="text-gray-600 text-sm">
                  {CLINIC_INFO.regNumber}
                </p>
              </div>
            </div>

            {/* Branches */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
              {CLINIC_INFO.branches.map((branch) => (
                <div key={branch.city}>
                  <p className="font-semibold text-green-700">
                    {branch.city}:
                  </p>
                  <p>{branch.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              Patient Information:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <p>
                <strong>Name:</strong> {formData.patientName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p>
                <strong>Disease/Condition:</strong>{' '}
                {formData.disease}
              </p>
            </div>
          </div>

          {/* Prescription Section */}
          <div
            className="border-t border-gray-300 pt-4"
            style={{ height: '50%' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl font-bold text-green-700">℞</span>
              <h3 className="text-xl font-semibold text-gray-700">
                Prescription
              </h3>
            </div>
            {/* Blank Space for Manual Writing */}
            <div
              className="border border-gray-400 h-full p-4"
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
              }}
            >
              <p className="text-gray-400 italic">
                Write prescription here...
              </p>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex justify-between items-center mt-8 border-t border-gray-300 pt-4">
            {/* Thank You Note */}
            <div>
              <p className="text-sm text-gray-800">
                Thank you for choosing {CLINIC_INFO.clinicName}.
              </p>
            </div>

            {/* Doctor's Signature */}
            <div className="text-right">
              {/* <p className="font-bold">{CLINIC_INFO.name}</p> */}
              <p className="text-gray-500">({CLINIC_INFO.specialty})</p>
              <p
                className="mt-2 border-t w-48 italic"
                style={{
                  fontFamily: "math",
                  fontSize: '20px',
                }}
              >
                Dr. sandeep rathariya
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 shadow-md"
          >
            Back to Form
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
          >
            Print Prescription
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
