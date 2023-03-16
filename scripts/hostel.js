const xlsx = require("xlsx");

const workbook = xlsx.readFile("Book1.xlsx");
const worksheet = workbook.Sheets["Sheet1"];
const arrStudents = xlsx.utils.sheet_to_json(worksheet);

/*JUst printing */
for (var stu of arrStudents) {
  console.log(stu);
  if (stu["Total"] == 0) {
    console.log(`Fees paid: Yes`);
  } else {
    console.log(`Fees paid: No`);
  }
}

/*As an attribute */
for (var stu of arrStudents) {
  if (stu["Total"] == 0) {
    stu.feepaid = "Yes";
    //console.log(`Fees paid: Yes`);
  } else {
    stu.feepaid = "No";
    //console.log(`Fees paid: No`);
  }
  console.log(stu);
}