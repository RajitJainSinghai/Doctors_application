import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    disease: '',
    prescription: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreview = () => {
    navigate('/preview', { state: formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Patient Registration & Prescription</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Disease/Condition</label>
            <input
              type="text"
              name="disease"
              value={formData.disease}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Prescription</label>
            <textarea
              name="prescription"
              value={formData.prescription}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500"
              placeholder="Enter prescription details..."
              required
            />
          </div>

          <button
            type="button"
            onClick={handlePreview}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Preview & Print
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
