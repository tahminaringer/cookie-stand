'use strict'
var stores = [];
var storeInfo = document.getElementById('storeSales');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var myTable = document.getElementById("myTable");

function createTableHeader() {
    var trElement = document.createElement('tr');
    myTable.appendChild(trElement);
    var thElement = document.createElement('th');
    thElement.textContent = "Store location";
    trElement.appendChild(thElement);

    for (var i =0; i < hours.length; i++) {
        thElement = document.createElement('th');
        thElement.textContent = hours[i];
        trElement.appendChild(thElement);
    }
    thElement = document.createElement('th');
    thElement.textContent = 'Total';
    trElement.appendChild(thElement);
}
createTableHeader();

function createTableFooter() {
    var trElement = document.createElement('tr');
    myTable.appendChild(trElement);
    var thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = ('Totals');

    var grandTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourlySum = 0;
        var tdElement = document.createElement ('td');
        trElement.appendChild(tdElement);

        for (var j = 0; j < stores.length; j++) {
            hourlySum += stores[j].cookiesEachHour[i];
            grandTotal += stores[j].cookiesEachHour[i];
        }
        tdElement.textContent = hourlySum;
    }
    tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = grandTotal;
}
function Store (city, minCust, maxCust, aveCookieSale, cookiesEachHour) {
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.aveCookieSale = aveCookieSale;
    this.cookiesEachHour = cookiesEachHour;
    this.totalCookies = function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    } 
}

Store.prototype.render = function() {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = (this.city);
    trElement.appendChild(tdElement);
    
    var totalCookiesPerDay = 0;
    for (var i = 0; i < hours.length; i++){
        
        var table = document.createElement('td');
        var cookiesThisHour = Math.round(this.totalCookies(this.minCust, this.maxCust)* this.aveCookieSale);
        table.textContent = cookiesThisHour;
        trElement.appendChild(table)
        myTable.appendChild(trElement);
        totalCookiesPerDay += cookiesThisHour;
        this.cookiesEachHour.push(cookiesThisHour);
        
    }
    var total = document.createElement('td');
    total.textContent = totalCookiesPerDay;
    console.log(myTable)
    trElement.appendChild(total);
}


var Seattle = new Store('Seattle', 23, 65, 6.3, []);
var Tokyo = new Store('Tokyo', 3, 24, 1.2, []);
var Dubai = new Store('Dubai', 11, 38, 3.7, []);
var Paris = new Store('Paris', 20, 38, 2.3, []);
var Lima = new Store('Lima', 2, 16, 4.6, [])

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
stores = [Seattle, Tokyo, Dubai, Paris, Lima]

createTableFooter();

function logger(event) {
    console.log('Input changed', event.target.name, event.target.value);
}

function createNewStore(event) {
    event.preventDefault();
    var city = event.target.city.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var average = parseFloat(event.target.average.value);
    var newStore = new Store(city, min, max, average, []);
    stores.push(newStore);
    console.log(city, min, max, average);
 
 refreshTable();   
}
var formElement = document.getElementById('new-store-form');
formElement.addEventListener('submit', createNewStore);

function refreshTable() {
    var table = document.getElementById("myTable");
    table.innerHTML = "";
    createTableHeader();
    
    for (var j = 0; j < stores.length; j++) {
        stores[j].render();
    }
    createTableFooter();
}