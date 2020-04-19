(function () {

    let cities = [
        {
            "fIdName": "Tokyo",
            "fIdLat": 35.6850,
            "fIdLong": 139.7514,
            "fIdCountry": "Japan",
            "fIdAbbreviation": "JPN",
            "fIdCapitalStatus": "primary",
            "fIdPopulation": 35676000
        },
        {
            "fIdName": "New York",
            "fIdLat": 40.6943,
            "fIdLong": -73.9249,
            "fIdCountry": "United States",
            "fIdAbbreviation": "USA",
            "fIdCapitalStatus": "NA",
            "fIdPopulation": 19354922
        }
    ];

    let table = document.querySelector("table");
    let TableHeadings = Object.keys(cities[0]);
    table.classList.add("table")
    generateTableHead(table, TableHeadings);
    generateTable(table, cities);

})();

function generateTableHead(table, TableHeadings) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let heading of TableHeadings) {
        let th = document.createElement("th");
        let text = document.createTextNode(heading);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

