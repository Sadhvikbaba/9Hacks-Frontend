import React, { useEffect } from 'react';
import { FaSchool, FaUserGraduate, FaIdBadge, FaUser, FaLock, FaVenusMars, FaPhone, FaBook, FaCalendarAlt } from 'react-icons/fa';
import { getUser } from '../connecting';

function UserDashboard() {

  useEffect(()=> {
    const load = async () => {
      await getUser()
      .then((res) => {
        console.log(res);
        
      })
    }
    load()
  } ,[])
  
  const userData = {
    school: 'SRM University',
    branch: 'Computer Science (AI & ML)',
    admissionNo: 'A123456789',
    fullName: 'John Doe',
    section: 'A Section', 
    gender: 'Male',
    phoneNumber: '+1234567890',
    semester: '3rd Semester',
    batch: '2023-2027',
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
        <h2 className=" flex items-center text-2xl font-semibold text-gray-800 dark:text-white mb-4"><FaUser/>&nbsp; &nbsp;{userData.fullName}</h2>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaSchool className="mr-3 text-gray-500 dark:text-gray-400" />
             {userData.school}
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaUserGraduate className="mr-3 text-gray-500 dark:text-gray-400" />
            {userData.branch}
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaIdBadge className="mr-3 text-gray-500 dark:text-gray-400" />
             {userData.admissionNo}
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaBook className="mr-3 text-gray-500 dark:text-gray-400" />
             {userData.section}
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaVenusMars className="mr-3 text-gray-500 dark:text-gray-400" />
             {userData.gender}
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaPhone className="mr-3 text-gray-500 dark:text-gray-400" />
             {userData.phoneNumber}
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaBook className="mr-3 text-gray-500 dark:text-gray-400" />
             {userData.semester}
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCalendarAlt className="mr-3 text-gray-500 dark:text-gray-400" />
             {userData.batch}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;


