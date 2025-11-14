import React, { useState, useEffect } from "react";
import api from "../Service/apiService";

// --- Sub-component for sending messages ---
function MessageComposer({ groupId, onMessageSent }) {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const handleSendMessage = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("groupId", groupId);
    formData.append("content", content);
    if (file) {
      formData.append("attachment", file);
    }

    try {
      await api.post("/message", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setContent("");
      setFile(null);
      e.target.reset(); // Clear file input
      onMessageSent(); // Tell parent to refetch messages
    } catch (err) {
      setError(err.response?.data?.message || "Error sending message");
    }
  };

  return (
    <>
      {file && (
        <video
          src={URL.createObjectURL(file)}
          width={400}
          height={200}
          controls
        />
      )}
      <form onSubmit={handleSendMessage} className="mt-4 p-4">
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <textarea
          className="w-full p-2 border rounded"
          rows="3"
          placeholder="Type your message..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="flex justify-between items-center">
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send
          </button>
        </div>
      </form>
    </>
  );
}

// --- Sub-component for managing members ---
function MemberManagement({ group, memberList }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [allMembers, setAllMembers] = useState([]);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await api.post(`/groups/${group._id}/members`, {
        studentphone: email,
      });
      setSuccess(response.data.message);
      setEmail("");
      // In a real app, you'd refetch the group details here
    } catch (err) {
      setError(err.response?.data?.message || "Error adding student");
    }
  };

  useEffect(() => {
    const fetchMyGroups = async () => {
      try {
        const response = await api.get("/groups/mygroups");
        setAllMembers(response?.data[0]?.members);
      } catch (err) {
        console.error("Error fetching groups:", err);
        setMessage("Could not fetch groups.");
      }
    };
    fetchMyGroups();
  }, []);
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Add Student to Class</h3>
      <form onSubmit={handleAddStudent} className="flex gap-2">
        <input
          type="phone"
          placeholder="Student's Phone No"
          className="flex-grow p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Add Student
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}

      <h3 className="text-lg font-bold mt-6 mb-2">Current Members</h3>
      <ul>
        {/* We need to populate this data. Simple for now. */}
        {allMembers && allMembers.length > 0 ? (
          allMembers.map((member) => (
            <li key={member._id}>
              {member.fullname || member.phoneNumber} {member.role}
            </li>
          ))
        ) : (
          <li>Just you!</li>
        )}
      </ul>
    </div>
  );
}

// --- Main Channel Component ---
function GroupChannel({ groupId }) {
  const [group, setGroup] = useState(null);
  const [messages, setMessages] = useState([]); // This would be for the message feed
  const [activeTab, setActiveTab] = useState("messages");
  const [memberList, setMemberList] = useState([]);
  // Fetch group details whenever the groupId changes
  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        // We need to populate member data in the group details call
        const response = await api.get(`/groups/${groupId}`);
        setGroup(response.data);
      } catch (error) {
        console.error("Error fetching group details:", error);
      }

      // TODO: You would also fetch all messages for this group
      // e.g., const msgResponse = await api.get(`/messages/${groupId}`);
      // setMessages(msgResponse.data);
    };

    if (groupId) {
      fetchGroupData();
    }
  }, [groupId]);

  if (!group) {
    return <div>Loading class...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">{group.name}</h2>
      <p>{group.description}</p>
      {/* Tab Navigation */}
      <div className="border-b mt-4">
        <button
          className={`p-2 ${
            activeTab === "messages" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("messages")}
        >
          Messages
        </button>
        <button
          className={`p-2 ${
            activeTab === "members" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("members")}
        >
          Members ({group.members.length})
        </button>
      </div>
      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "messages" && (
          <div>
            {/* <div className="h-96 overflow-y-auto p-4 border rounded">
              <p>Message feed (coming soon).</p>
            </div> */}
            <MessageComposer
              groupId={group._id}
              onMessageSent={() => {
                /* refetch messages */
              }}
            />
          </div>
        )}

        {activeTab === "members" && (
          <MemberManagement group={group} memberList={memberList} />
        )}
      </div>
    </div>
  );
}

export default GroupChannel;
