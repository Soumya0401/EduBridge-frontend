// import React, { useState } from 'react';
// import api from '../Service/apiService';

// function CreateGroupModal({ onClose, onGroupCreated }) {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const response = await api.post('/groups', { name, description });
//       onGroupCreated(response.data); // Pass the new group back
//     } catch (err) {
//       setError(err.response?.data?.message || "Error creating group");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg w-1/3">
//         <h3 className="text-lg font-bold mb-4">Create a New Class</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2">Class Name</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Description (Optional)</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           {error && <p className="text-red-500 mb-2">{error}</p>}
//           <div className="flex justify-end">
//             <button type="button" onClick={onClose} className="mr-2 p-2">Cancel</button>
//             <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateGroupModal;

import React, { useState } from 'react';
import api from '../Service/apiService';

function CreateGroupModal({ onClose, onGroupCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/groups', { name, description });
      onGroupCreated(response.data); // Pass the new group back
    } catch (err) {
      setError(err.response?.data?.message || "Error creating group");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h3 className="text-lg font-bold mb-4">Create a New Class</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Class Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description (Optional)</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 p-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGroupModal;