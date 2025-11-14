import React, { useState, useEffect } from "react";
import api from "../Service/apiService.jsx"; // Corrected path
import GroupChannel from "./GroupChannel";
import CreateGroupModal from "./CreateGroupModal"; // We'll make this next

function TeacherDashboard() {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Fetch all the teacher's groups
  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      setLoading(true);
      const response = await api.get("/groups/mygroups");
      setGroups(response.data);
      // Automatically select the first group
      if (response.data.length > 0) {
        setSelectedGroupId(response.data[0]._id);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching groups:", error);
      setLoading(false);
    }
  };

  const handleGroupCreated = (newGroup) => {
    // Add new group to the list and select it
    setGroups([...groups, newGroup]);
    setSelectedGroupId(newGroup._id);
    setShowCreateModal(false);
  };

  if (loading) {
    return <div>Loading your dashboard...</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Left Column: Group List */}
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">My Classes</h2>
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4"
        >
          + Create New Group
        </button>
        <ul>
          {groups.map((group) => (
            <li
              key={group._id}
              className={`p-2 cursor-pointer rounded ${
                selectedGroupId === group._id
                  ? "bg-blue-200"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedGroupId(group._id)}
            >
              {group.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Group Channel */}
      <div className="w-3/4 p-4">
        {selectedGroupId ? (
          <GroupChannel groupId={selectedGroupId} />
        ) : (
          <div>
            <h2>Welcome to your Dashboard.</h2>
            <p>
              Select a class to view messages, or create a new one to get
              started.
            </p>
          </div>
        )}
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <CreateGroupModal
          onClose={() => setShowCreateModal(false)}
          onGroupCreated={handleGroupCreated}
        />
      )}
    </div>
  );
}

export default TeacherDashboard;
