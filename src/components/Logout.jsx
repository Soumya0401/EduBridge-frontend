import React, { useRef } from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const modalRef = useRef(null); // Ref to control the dialog modal

    // This is the original logout logic
    const handleLogoutConfirm = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully");
            
            // Close the modal before reloading
            if (modalRef.current) {
                modalRef.current.close();
            }
            
            setTimeout(() => {
                window.location.reload();
            }, 1000); // Reload after 1 second
            
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };

    // Function to show the confirmation modal
    const showConfirmationModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    
    // Function to close the confirmation modal
    const closeConfirmationModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <>
            <div>
                {/* This button now opens the confirmation modal */}
                <button
                    className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                    onClick={showConfirmationModal}>
                    Logout
                </button>
            </div>

            {/* Confirmation Modal Dialog */}
            <dialog id="logout_modal" className="modal" ref={modalRef}>
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <h3 className="font-bold text-lg">Confirm Logout</h3>
                    <p className="py-4">Are you sure you want to logout?</p>
                    <div className="modal-action flex justify-end space-x-4">
                        {/* "Yes" button triggers the logout */}
                        <button
                            className="btn bg-red-500 text-white hover:bg-red-600"
                            onClick={handleLogoutConfirm}
                        >
                            Yes, Logout
                        </button>
                        {/* "No" button closes the modal */}
                        <button
                            className="btn dark:bg-slate-600"
                            onClick={closeConfirmationModal}
                        >
                            No, Cancel
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default Logout;
