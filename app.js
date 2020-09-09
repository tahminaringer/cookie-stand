'use strict'

var storeInfo = document.getElementById('storeSales');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var myTable = document.getElementById("myTable");

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
        table.textContent = hours[i] + ': ' + cookiesThisHour;
        trElement.appendChild(table)
        myTable.appendChild(trElement);
        totalCookiesPerDay += cookiesThisHour;
        
    }
    var total = document.createElement('td');
    total.textContent = 'total: ' + totalCookiesPerDay;
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
