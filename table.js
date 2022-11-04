export const tableStudents = (data) => {
  let divTable = document.getElementById("table");
  let table = `
  <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Grade</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Student 1</td>
                <td>100</td>
                <td>100%</td>
              </tr>
              
            </tbody>
          </table>`;
  divTable.innerHTML = table;
  return divTable;
};
