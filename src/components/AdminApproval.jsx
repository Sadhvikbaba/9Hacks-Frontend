import React, { useState } from 'react';
import { HiDotsVertical } from "react-icons/hi";

function AdminApproval() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedStudent(null);
  };

  const handleAccept = () => {
    console.log("Accepted:", selectedStudent);
    closeModal();
  };

  const handleReject = () => {
    console.log("Rejected:", selectedStudent);
    closeModal();
  };

  const students = [
    { id: 'AP23110010128', name: 'Sadhvik', time: '12:30', message: 'Want to go home' },
    { id: 'AP23110010...', name: 'likith', time: '12:30', message: 'Want to go home' },
    { id: 'AP23110010...', name: 'ashish', time: '12:30', message: 'Want to go home' },
  ];

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-600">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Requested Students</h2>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left">
          <thead>
            <tr className="dark:bg-gray-300">
              <th className="p-3">S.NO</th>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Time</th>
              <th className="p-3">Message</th>
              <th className="p-3">Approval</th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {students.map((student, index) => (
              <tr key={student.id}>
                <td className="px-3 text-2xl font-medium dark:text-gray-600">{index + 1}</td>
                <td className="px-3 py-2"><p className="dark:text-gray-600">{student.id}</p></td>
                <td className="px-3 py-2"><p>{student.name}</p></td>
                <td className="px-3 py-2"><p className="dark:text-gray-600">{student.time}</p></td>
                <td className="px-3 py-2"><p>{student.message}</p></td>
                <td 
                  onClick={() => openModal(student)} 
                  className="px-4 py-3 cursor-pointer rounded-lg text-white flex justify-center items-center w-full"
                >
                  <p className='bg-gray-400 p-3 rounded-lg'><HiDotsVertical/></p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <PopUp 
          student={selectedStudent}
          handleAccept={handleAccept}
          handleReject={handleReject}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

function PopUp({ student, handleAccept, handleReject, closeModal }) {
  return (
    <dialog open className="modal">
      <div className="modal-box">
        <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">Approval for {student.name}</h3>
        <p className="py-4">ID: {student.id}</p>
        <p className="py-4">Message: {student.message}</p>
        <div className="modal-action">
          <button onClick={handleAccept} className="btn btn-success">Accept</button>
          <button onClick={handleReject} className="btn btn-error">Reject</button>
        </div>
      </div>
    </dialog>
  );
}

export default AdminApproval;
