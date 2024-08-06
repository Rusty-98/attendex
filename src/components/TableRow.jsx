'use client'

import React, { memo } from 'react';

const TableRow = memo(({ record }) => (
  <tr className="border-t border-gray-700">
    <td className="py-2 px-4 border border-gray-600 text-left">{record.subjectName}</td>
    <td className="py-2 px-4 border border-gray-600 text-left">{record.totalLecture}</td>
    <td className="py-2 px-4 border border-gray-600 text-left">{record.attendedLecture}</td>
    <td className="py-2 px-4 border border-gray-600 text-left">{record.attendancePercentage}</td>
  </tr>
));

export default TableRow;
