/*

Question 1

Given the following array and implement the table dynamically

*/

const TableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
document.querySelector(
  "thead"
).innerHTML = `<tr><th>${TableInfo.tableHeader[0]}</th><th>${TableInfo.tableHeader[1]}</th><th>${TableInfo.tableHeader[2]}</th><th>${TableInfo.tableHeader[3]}</th>`;
let tbodyHtml = ``;
TableInfo.tableContent.map((item) => {
  tbodyHtml += `<tr><th>${item["Student Name"]}</th><th>${item.Age}</th><th>${item.Phone}</th><th>${item.Address}</th>`;
});
document.querySelector("tbody").innerHTML = tbodyHtml;
/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const List = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const ulElem = document.querySelector("ul");
const olElem = document.querySelector("ol");
const ulNodes = List.map((item) => {
  let liElem = document.createElement("li");
  liElem.textContent = item;
  return liElem;
});
const olNodes = List.map((item) => {
  let liElem = document.createElement("li");
  liElem.textContent = item;
  return liElem;
});
ulElem.append(...ulNodes);
olElem.append(...olNodes);
/*

Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list

*/

const DropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const optionElem = document.getElementById("cities");
const selectNodes = DropDownList.map((item) => {
  let selectElem = document.createElement("option");
  selectElem.value = item.value;
  selectElem.textContent = item.content;
  return selectElem;
});
optionElem.append(...selectNodes);
