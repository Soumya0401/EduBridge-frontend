import React, { useState, useEffect } from 'react';
import api from '../locales/apiService'; // Import our API service

function MessageComponent() {
  const [myGroups, setMyGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null); // State for the file
  const [message, setMessage] = useState('');

  // Fetch the user's groups on component load
  useEffect(() => {
    const fetchMyGroups = async () => {
      try {
        const response = await api.get('/groups/mygroups');
        setMyGroups(response.data);
        if (response.data.length > 0) {
          setSelectedGroupId(response.data[0]._id);
        }
      } catch (err) {
        console.error('Error fetching groups:', err);
      }
    };
    fetchMyGroups();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    // We must use FormData because we are sending a file
    const formData = new FormData();
    formData.append('groupId', selectedGroupId);
    formData.append('content', content);
    
    if (file) {
      formData.append('attachment', file); // 'attachment' must match backend
    }

    try {
      // Set headers for multipart/form-data
      const response = await api.post('/message', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setMessage('Message sent successfully!');
      setContent('');
      setFile(null);
      e.target.reset(); // Reset the form
    } catch (err) {
      console.error('Error sending message:', err);
      setMessage(err.response?.data?.message || 'Error sending message.');
    }
  };

  return (
    <div>
      <h3>Send Message to Group</h3>
      <form onSubmit={handleSendMessage}>
        {/* Group Selector */}
        <div>
          <label>Select Group: </label>
          <select 
            value={selectedGroupId} 
            onChange={(e) => setSelectedGroupId(e.target.value)}
            required
          >
            <option value="" disabled>-- Select a Group --</option>
            {myGroups.map(group => (
              <option key={group._id} value={group._id}>{group.name}</option>
            ))}
          </select>
        </div>
        
        {/* Message Content */}
        <div>
          <label>Message: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your message..."
            required
          />
        </div>

        {/* File Attachment */}
        <div>
          <label>Attach File (Optional): </label>
          <input 
            type="file" 
            onChange={handleFileChange} 
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default MessageComponent;