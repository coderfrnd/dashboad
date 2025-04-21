const fs = require('fs');

// Read the db.json at the root
const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

const today = new Date().getDate(); // Today's date (1-31)

// Function to generate random attendance till today's date
function generateAttendanceArray() {
  const attendance = [];
  for (let i = 0; i < today; i++) {
    attendance.push(Math.random() < 0.8); // 80% present, 20% absent
  }
  return attendance;
}

// Update each staff member by adding 'attendance' array
data.staffDashboard = data.staffDashboard.map(staff => ({
  ...staff,
  attendance: generateAttendanceArray()
}));

// Save the updated JSON back into db.json
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));

console.log('✅ Attendance array added to each staff successfully!');
