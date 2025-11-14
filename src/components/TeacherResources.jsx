import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// This is a reusable helper component for form fields
const FormField = ({ label, name, type = 'text', value, onChange, required = true }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm dark:bg-slate-800 dark:border-slate-600"
        />
    </div>
);

// Main Component
function TeacherResources() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 Fields
        firstName: '', middleName: '', lastName: '', dob: '', gender: '', nationality: '', bloodGroup: '', aadhaar: '', photo: null, permanentAddress: '', currentAddress: '', mobileNumber: '', emailAddress: '', emergencyContact: '',
        
        // Step 2 Fields (Updated for Teacher)
        subjectSpecialization: '',
        yearsOfExperience: '',
        highestQualification: '',
        university: '',
        yearOfGraduation: '',

        // Step 3 Fields
        allergies: '',
        chronicIllness: '',
        
        // Step 4
        declaration: false,
    });

    const handleChange = (input) => (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [input]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Teacher Form Submitted:", formData);
        alert("Registration Successful! Check the console for form data.");
    };
    
    // Renders the correct step based on the 'step' state
    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 formData={formData} handleFileChange={handleFileChange} handleChange={handleChange} />;
            case 2:
                return <Step2 formData={formData} handleChange={handleChange} />;
            case 3:
                return <Step3 formData={formData} handleChange={handleChange} />;
            case 4:
                return <Step4 formData={formData} handleChange={handleChange} />;
            default:
                return <div>Form Completed</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
                <div className="p-8">
                    {/* Changed Title */}
                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Teacher Registration Form</h2>
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Step {step} of 4</p>
                    <div className="mt-6">
                        <div className="overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">
                            <div className="h-2 rounded-full bg-pink-500" style={{ width: `${(step / 4) * 100}%` }}></div>
                        </div>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {renderStep()}
                        <div className={`flex ${step === 1 ? 'justify-end' : 'justify-between'} items-center pt-6 border-t border-gray-200 dark:border-slate-700`}>
                            {step > 1 && (<button type="button" onClick={prevStep} className="px-6 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500">Back</button>)}
                            {step < 4 && (<button type="button" onClick={nextStep} className="px-6 py-2 rounded-md text-sm font-medium text-white bg-pink-500 hover:bg-pink-600">Next</button>)}
                            {step === 4 && (<button type="submit" className="px-6 py-2 rounded-md text-sm font-medium text-white bg-green-500 hover:bg-green-600">Submit Registration</button>)}
                        </div>
                         <div className="text-center mt-4">
                            <Link to="/services" className="text-sm text-pink-500 hover:underline">Cancel and Go Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// --- Step Components ---

const Step1 = ({ formData, handleFileChange, handleChange }) => (
    <>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">1. Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange('firstName')} />
            <FormField label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange('middleName')} required={false} />
            <FormField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange('lastName')} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <FormField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange('dob')} />
            <FormField label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange('nationality')} />
            <FormField label="Aadhaar Number" name="aadhaar" value={formData.aadhaar} onChange={handleChange('aadhaar')} />
        </div>
        <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Passport Size Photograph</label>
            <input type="file" name="photo" onChange={handleFileChange} accept="image/*" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"/>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-8 mb-4">2. Contact Information</h3>
        <FormField label="Permanent Address" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange('permanentAddress')} />
        <div className="mt-6"><FormField label="Current Address (if different)" name="currentAddress" value={formData.currentAddress} onChange={handleChange('currentAddress')} required={false} /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
             <FormField label="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange('mobileNumber')} />
             <FormField label="Email Address" name="emailAddress" type="email" value={formData.emailAddress} onChange={handleChange('emailAddress')} />
             <FormField label="Emergency Contact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange('emergencyContact')} />
        </div>
    </>
);

// This entire step has been updated for teachers
const Step2 = ({ formData, handleChange }) => (
    <>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">3. Professional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Subject(s) Specialization" name="subjectSpecialization" value={formData.subjectSpecialization} onChange={handleChange('subjectSpecialization')} />
            <FormField label="Years of Experience" name="yearsOfExperience" type="number" value={formData.yearsOfExperience} onChange={handleChange('yearsOfExperience')} />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-8 mb-4">4. Educational Qualifications</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField label="Highest Qualification (e.g., B.Ed, PhD)" name="highestQualification" value={formData.highestQualification} onChange={handleChange('highestQualification')} />
            <FormField label="University / College" name="university" value={formData.university} onChange={handleChange('university')} />
            <FormField label="Year of Graduation" name="yearOfGraduation" type="number" value={formData.yearOfGraduation} onChange={handleChange('yearOfGraduation')} />
        </div>
    </>
);

const Step3 = ({ formData, handleChange }) => (
     <>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">5. Medical Information</h3>
        <FormField label="Any Known Allergies" name="allergies" value={formData.allergies} onChange={handleChange('allergies')} required={false} />
        <div className="mt-6"><FormField label="Chronic Illnesses or Medical Conditions" name="chronicIllness" value={formData.chronicIllness} onChange={handleChange('chronicIllness')} required={false} /></div>
     </>
);

const Step4 = ({ formData, handleChange }) => (
    <>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">6. Review & Declaration</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Please review all the information carefully before submitting.</p>
        <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => {
                if (key === 'photo' || typeof value === 'boolean') return null;
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                return (
                    <div key={key} className="flex justify-between border-b pb-2 dark:border-slate-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{label}:</span>
                        <span className="text-gray-900 dark:text-white text-right break-all">{value || 'N/A'}</span>
                    </div>
                );
            })}
        </div>
        <div className="mt-8">
            <label htmlFor="declaration" className="flex items-center">
                <input type="checkbox" id="declaration" name="declaration" checked={formData.declaration} onChange={handleChange('declaration')} required className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"/>
                <span className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                    I hereby declare that the information provided is true to the best of my knowledge.
                </span>
            </label>
        </div>
    </>
);

export default TeacherResources;