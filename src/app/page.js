'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import TableHeader from '@/components/TableHeader';
import TableRow from '@/components/TableRow';

export default function Home() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;
  const cache = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cache.current.length) {
          setAttendanceData(cache.current);
        } else {
          const response = await axios.get('/api/getData');
          cache.current = response.data;
          setAttendanceData(cache.current);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredData = attendanceData.filter(student =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-5 md:py-10 dark">
      <div className="max-w-6xl mx-auto bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-2xl md:text-3xl font-bold text-center py-4 bg-blue-700 text-white">AttendX</h1>
        <SearchBar query={searchQuery} onQueryChange={handleSearchChange} />
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center">
              <Image src="/loading.svg" alt="Loading" width={300} height={300} />
            </div>
          ) : (
            paginatedData.map((student, index) => (
              student.attendanceData.length > 0 && (
                <div key={index} className="p-4 border-b border-gray-700 last:border-none">
                  <h2 className="text-lg md:text-xl font-semibold">{student.studentName}</h2>
                  <table className="min-w-full bg-gray-800 border mt-2">
                    <TableHeader />
                    <tbody>
                      {student.attendanceData.map((record, idx) => (
                        <TableRow key={idx} record={record} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ))
          )}
        </div>
        {!loading && (
          <Pagination
            totalItems={filteredData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
