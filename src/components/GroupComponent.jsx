import React, { useState, useEffect } from "react";
import api from "../utils/apiService"; // Import our API service

function GroupComponent() {
  const [myGroups, setMyGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [message, setMessage] = useState("");

  // Fetch the user's groups on component load
  useEffect(() => {
    fetchMyGroups();
  }, []);

  const fetchMyGroups = async () => {
    try {
      const response = await api.get("/groups/mygroups");
      setMyGroups(response.data);
      if (response.data.length > 0) {
        setSelectedGroupId(response.data[0]._id); // Default to the first group
      }
    } catch (err) {
      console.error("Error fetching groups:", err);
      setMessage("Could not fetch groups.");
    }
  };

  // Handler for creating a new group
  const handleCreateGroup = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/groups", { name: groupName });
      setMessage(`Group "${response.data.name}" created successfully!`);
      setGroupName("");
      fetchMyGroups(); // Refresh the group list
    } catch (err) {
      console.error("Error creating group:", err);
      setMessage(err.response?.data?.message || "Error creating group.");
    }
  };

  // Handler for adding a student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!selectedGroupId) {
      setMessage("Please select a group first.");
      return;
    }
    try {
      const response = await api.post(`/groups/${selectedGroupId}/members`, {
        studentEmail,
      });
      setMessage(response.data.message);
      setStudentEmail("");
    } catch (err) {
      console.error("Error adding student:", err);
      setMessage(err.response?.data?.message || "Error adding student.");
    }
  };

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      {/* Section 1: Create Group */}
      <div>
        <h3>Create New Group</h3>
        <form onSubmit={handleCreateGroup}>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="New Group Name"
            required
          />
          <button type="submit">Create Group</button>
        </form>
      </div>

      {/* Section 2: Add Student to Group */}
      <div>
        <h3>Add Student to Group</h3>
        <form onSubmit={handleAddStudent}>
          <select
            value={selectedGroupId}
            onChange={(e) => setSelectedGroupId(e.target.value)}
          >
            <option value="">-- Select a Group --</option>
            {myGroups.map((group) => (
              <option key={group._id} value={group._id}>
                {group.name}
              </option>
            ))}
          </select>
          <br />
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            placeholder="Student's Email"
            required
          />
          <button type="submit">Add Student</button>
        </form>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
}

export default GroupComponent;
