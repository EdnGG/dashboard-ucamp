export const tableStudents = (data) => {
  console.log("Data: ", data);
  let divTable = document.getElementById("table");
  let table = "";

  // table += `
  //    <table>
  //      <thead>
  //       <tr>
  //         <th>Student</th>
  //         <th>Age</th>
  //         <th>Email</th>
  //       </tr>
  //      </thead>
  //    <tbody>
  //    <tr>
  //      <td>${data.name}</td>
  //      <td>${data.age}</td>
  //      <td>${data.email}</td>
  //    </tr>
  //    </tbody>
  //    </table>
  //   `;

  data.forEach((item, i) => {
    table += `
    <table>
      <thead>
       <tr>
         <th>Student</th>
         <th>Age</th>
         <th>Email</th>
       </tr>
      </thead>
    <tbody>
    <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.email}</td>
    </tr>
    </tbody>
    </table>
    `;
  });

  divTable.innerHTML = table;
  return divTable;
};
