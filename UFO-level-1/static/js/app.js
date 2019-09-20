// import the data from data.js and create table reference 
var ufoData = data;
var tbody = d3.select("tbody");

// create a function to put data inside of table
function createTable(data) {
  // clear data
  tbody.html("");

  // Loop through the data and then append to row, and cell data
  data.forEach((dataRow) => {

    var row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// This function is triggered when the button is clicked
function handleClick() {

  // Prevents the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = ufoData;

  // If user inputs a date then filter it on that date
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // Create the new table
  createTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
createTable(ufoData);
