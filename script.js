// Get all prices
let prices = document.querySelectorAll(".price");

const getSum = () => {

    let total = 0;

    // Add all prices
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].textContent);
    }

    // Create new row
    let row = document.createElement("tr");

    // First cell
    let itemCell = document.createElement("td");
    itemCell.textContent = "Total";

    // Second cell - Prices column
    let priceCell = document.createElement("td");
    priceCell.textContent = total;

    // Add cells to row
    row.appendChild(itemCell);
    row.appendChild(priceCell);

    // Add row to table
    document.querySelector("table").appendChild(row);
};


// Automatically calculate total when page loads
getSum();