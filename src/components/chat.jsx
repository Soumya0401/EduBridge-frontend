import React, { useState, useEffect, useRef } from 'react';



// --- Firebase Imports ---
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithCustomToken,
  signInAnonymously 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  serverTimestamp,
  doc,
  getDoc
} from 'firebase/firestore';
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

// --- Icon Imports (using simple SVGs) ---
const SendIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);
const PaperClipIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a4 4 0 00-5.656-5.656l-6.415 6.415a6 6 0 108.485 8.485L17.657 12" />
  </svg>
);
const UserGroupIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-2.29l-2.121 2.121A5.002 5.002 0 0112 19a5.002 5.002 0 01-2.523-.669l-2.121-2.121A3 3 0 002 18v2h5m5-12a4 4 0 11-8 0 4 4 0 018 0zM12 14a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);
const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

// --- Firebase Config ---
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// --- Initialize Firebase ---
let app, auth, db, storage;
if (firebaseConfig.apiKey) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
}

// --- Main Chat Component ---
function ChatApp() {
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const messagesEndRef = useRef(null);

  // 1. Authentication
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userDocRef = doc(db, `artifacts/${appId}/public/data/users`, authUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUser({ uid: authUser.uid, ...userDocSnap.data() });
        } else {
          console.error("User document not found in Firestore!");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });
    if (initialAuthToken) {
      signInWithCustomToken(auth, initialAuthToken).catch(err => console.error("Custom sign-in failed", err));
    } else {
      signInAnonymously(auth).catch(err => console.error("Anonymous sign-in failed", err));
    }
    return () => unsubscribe();
  }, [auth]);

  // 2. Fetch Groups (Classes)
  useEffect(() => {
    if (!db || !user) return;
    const groupsRef = collection(db, `artifacts/${appId}/public/data/groups`);
    const q = query(groupsRef, where("members", "array-contains", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedGroups = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGroups(fetchedGroups);
      if (!currentGroup && fetchedGroups.length > 0) {
        setCurrentGroup(fetchedGroups[0]);
      }
    });
    return () => unsubscribe();
  }, [db, user, currentGroup]);

  // 3. Fetch Messages
  useEffect(() => {
    if (!db || !currentGroup) {
      setMessages([]);
      return;
    }
    const messagesRef = collection(db, `artifacts/${appId}/public/data/chats`);
    const q = query(
      messagesRef,
      where("groupId", "==", currentGroup.id),
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(fetchedMessages);
    });
    return () => unsubscribe();
  }, [db, currentGroup]);

  // 4. Scroll to Bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 5. Handle Send Message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (uploading || !user || !currentGroup) return;
    if (newMessage.trim() === "" && !file) return;

    let fileUrl = null;
    let fileName = null;
    setUploading(true);

    if (file) {
      try {
        const fileStorageRef = ref(storage, `chat_files/${appId}/${currentGroup.id}/${Date.now()}_${file.name}`);
        const uploadResult = await uploadBytes(fileStorageRef, file);
        fileUrl = await getDownloadURL(uploadResult.ref);
        fileName = file.name;
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploading(false);
        return;
      }
    }

    const chatsRef = collection(db, `artifacts/${appId}/public/data/chats`);
    try {
      await addDoc(chatsRef, {
        text: newMessage,
        fileUrl: fileUrl,
        fileName: fileName,
        senderId: user.uid,
        senderName: user.fullname,
        groupId: currentGroup.id,
        createdAt: serverTimestamp(),
      });
      setNewMessage("");
      setFile(null);
      const fileInput = document.getElementById('file-input');
      if (fileInput) fileInput.value = null;
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setUploading(false);
  };
  
  // 6. Handle Create Group
  const handleCreateGroup = async () => {
    if (!user || user.userType !== 'teacher') return;
    const groupName = prompt("Enter new class name:");
    if (groupName && groupName.trim() !== "") {
      try {
        const groupsRef = collection(db, `artifacts/${appId}/public/data/groups`);
        await addDoc(groupsRef, {
          name: groupName,
          createdBy: user.uid,
          members: [user.uid],
          createdAt: serverTimestamp(),
        });
        alert(`Group '${groupName}' created!`);
      } catch (error) {
        console.error("Error creating group:", error);
      }
    }
  };
  
  // 7. Handle Add User (Placeholder)
  const handleAddUserToGroup = async () => {
    if (!user || user.userType !== 'teacher' || !currentGroup) {
      alert("Only teachers can add users to the current group.");
      return;
    }
    const emailToAdd = prompt("Enter the email of the user to add:");
    if (emailToAdd) {
      alert("Adding users by email requires a backend function (not included in this example).");
    }
  };

  // 8. Format Timestamp
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Just now';
    return new Date(timestamp.seconds * 1000).toLocaleString();
  };

  // 9. Render Logic
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold">Signing in...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white">
      {/* Sidebar - Group List */}
      <div className="w-1/4 bg-white dark:bg-slate-800 border-r dark:border-slate-700 flex flex-col">
        <div className="p-4 border-b dark:border-slate-700">
          <h2 className="text-xl font-bold flex items-center">
            <UserGroupIcon />
            <span className="ml-2">Your Classes</span>
          </h2>
          {user.userType === 'teacher' && (
            <button
              onClick={handleCreateGroup}
              className="w-full mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 flex items-center justify-center"
            >
              <PlusIcon />
              <span className="ml-1">Create New Class</span>
            </button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto">
          {groups.map(group => (
            <div
              key={group.id}
              className={`p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 ${currentGroup?.id === group.id ? 'bg-gray-200 dark:bg-slate-700' : ''}`}
              onClick={() => setCurrentGroup(group)}
            >
              <h3 className="font-semibold">{group.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentGroup ? (
          <>
            <div className="p-4 bg-white dark:bg-slate-800 border-b dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-xl font-bold">{currentGroup.name}</h2>
              {user.userType === 'teacher' && (
                <button
                  onClick={handleAddUserToGroup}
                  className="bg-gray-200 dark:bg-slate-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 text-sm"
                >
                  Add User
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === user.uid ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-lg ${
                      message.senderId === user.uid
                        ? 'bg-pink-500 text-white'
                        : 'bg-white dark:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-sm">{message.senderName}</span>
                      <span className={`text-xs ml-2 ${message.senderId === user.uid ? 'text-pink-100' : 'text-gray-400'}`}>
                        {formatTimestamp(message.createdAt)}
                      </span>
                    </div>
                    <p>{message.text}</p>
                    {message.fileUrl && (
                      <a
                        href={message.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-2 inline-block p-2 rounded-lg ${
                          message.senderId === user.uid
                            ? 'bg-pink-400 hover:bg-pink-300'
                            : 'bg-gray-100 dark:bg-slate-600 hover:bg-gray-200 dark:hover:bg-slate-500'
                        }`}
                      >
                        <div className="flex items-center">
                          <PaperClipIcon />
                          <span className="ml-2 underline">{message.fileName || 'View Attached File'}</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-800 border-t dark:border-slate-700 flex items-center">
              <label htmlFor="file-input" className="cursor-pointer mr-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700">
                <PaperClipIcon />
                <input id="file-input" type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
              </label>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg outline-none bg-gray-100 dark:bg-slate-700 dark:border-slate-600"
                disabled={uploading}
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 disabled:bg-gray-400"
                disabled={uploading}
              >
                {uploading ? '...' : <SendIcon />}
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <UserGroupIcon className="w-16 h-16 mx-auto" />
              <p className="mt-4 text-xl">Select a class to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatApp;

