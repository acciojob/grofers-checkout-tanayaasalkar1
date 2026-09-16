const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let prices = document.querySelectorAll(".price");

const getSum = () => {

    let total = 0;

    // Calculate total
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].textContent);
    }

    // Create new row
    let row = document.createElement("tr");

    // Create first cell
    let itemCell = document.createElement("td");
    itemCell.textContent = "Total";

    // Create second cell
    let priceCell = document.createElement("td");
    priceCell.textContent = total;

    // Add both cells to row
    row.appendChild(itemCell);
    row.appendChild(priceCell);

    // Add row to table
    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);