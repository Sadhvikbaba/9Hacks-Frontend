import React, { useState } from 'react';

function History() {
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [selectedOutPass, setSelectedOutPass] = useState(null);

  const openCancelModal = (outPass) => {
    setSelectedOutPass(outPass);
    setIsCancelOpen(true);
  };

  const closeCancelModal = () => {
    setIsCancelOpen(false);
    setSelectedOutPass(null);
  };

  const handleConfirmCancel = () => {
    console.log("Canceled Out Pass:", selectedOutPass);
    closeCancelModal();
  };

  const outPasses = [
    { id: 1, time: '12:30', message: 'Want to go home', status: 'Pending' },
  ];

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-600">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Out Pass History</h2>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left">
          <thead>
            <tr className="dark:bg-gray-300">
              <th className="p-3">S.NO</th>
              <th className="p-3">Time</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
              <th className="p-3">Edit</th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {outPasses.map((outPass, index) => (
              <tr key={outPass.id}>
                <td className="px-3 text-2xl font-medium dark:text-gray-600">{index + 1}</td>
                <td className="px-3 py-2"><p>{outPass.time}</p></td>
                <td className="px-3 py-2"><p className="dark:text-gray-600">{outPass.message}</p></td>
                <td className="px-3 py-2"><p>{outPass.status}</p></td>
                <td 
                  onClick={() => openCancelModal(outPass)} 
                  className="px-4 py-3 bg-red-600 cursor-pointer rounded-lg text-white flex justify-center items-center w-full"
                >
                  <p>cancel</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isCancelOpen && (
        <CancelPopup
          outPass={selectedOutPass}
          handleConfirmCancel={handleConfirmCancel}
          closeModal={closeCancelModal}
        />
      )}
    </div>
  );
}

function CancelPopup({ outPass, handleConfirmCancel, closeModal }) {
  return (
    <dialog open className="modal">
      <div className="modal-box">
        <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">Cancel Out Pass</h3>
        <p className="py-4">Are you sure you want to cancel this out pass request?</p>
        <div className="modal-action">
          <button onClick={handleConfirmCancel} className="btn btn-error">Confirm Cancel</button>
          <button onClick={closeModal} className="btn">Close</button>
        </div>
      </div>
    </dialog>
  );
}

export default History;
