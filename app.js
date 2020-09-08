'use strict'

var storeInfo = document.getElementById('storeSales');


function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //caluculates random amount of cookies per hour
}



var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//forloop- loop through hours array-
//inside for loop declar total cookies per hour var, use random number function to calculate total, look how to round a number, random number * customers per hour. up count to include each hour. Line 18 add peramiter to add this.notation
// }

var seattle = {
    minCust: 23,
    maxCust: 65,
    aveCookieSale: 6.3, 
    cookiesEachHour: [],
    
    render: function() {
        var city = document.createElement('ul'); 
        city.textContent = ('Seattle'); 
        storeInfo.appendChild(city);
        
        var totalCookiesPerDay = 0;
        for (var i = 0; i < hours.length; i++) {
            var list = document.createElement('li');
            var cookiesThisHour = Math.round(getRandomInt(this.minCust, this.maxCust)* this.aveCookieSale);
            list.textContent = hours[i] + ': ' + cookiesThisHour;
            totalCookiesPerDay += cookiesThisHour;
            city.appendChild(list);
        } 

        var total = document.createElement('li')
        total.textContent = 'total: ' + totalCookiesPerDay;
        city.append(total);
    } 
}

seattle.render();

var Tokyo = {
    minCust: 3,
    maxCust: 24,
    aveCookieSale: 1.2,
    cookiesEachHour: [],

    render: function() {
        var city = document.createElement('ul'); 
        city.textContent = ('Tokyo'); 
        storeInfo.appendChild(city);
        
        var totalCookiesPerDay = 0;
        for (var i = 0; i < hours.length; i++) {
            var list = document.createElement('li');
            var cookiesThisHour = Math.round(getRandomInt(this.minCust, this.maxCust)* this.aveCookieSale);
            list.textContent = hours[i] + ': ' + cookiesThisHour;
            totalCookiesPerDay += cookiesThisHour;
            city.appendChild(list);
        } 

        var total = document.createElement('li')
        total.textContent = 'total: ' + totalCookiesPerDay;
        city.append(total);
    } 
}

Tokyo.render();

var Dubai = {
    minCust: 11,
    maxCust: 38,
    aveCookieSale: 3.7,
    cookiesEachHour: [],

    render: function() {
        var city = document.createElement('ul'); 
        city.textContent = ('Dubai'); 
        storeInfo.appendChild(city);
        
        var totalCookiesPerDay = 0;
        for (var i = 0; i < hours.length; i++) {
            var list = document.createElement('li');
            var cookiesThisHour = Math.round(getRandomInt(this.minCust, this.maxCust)* this.aveCookieSale);
            list.textContent = hours[i] + ': ' + cookiesThisHour;
            totalCookiesPerDay += cookiesThisHour;
            city.appendChild(list);
        } 

        var total = document.createElement('li')
        total.textContent = 'total: ' + totalCookiesPerDay;
        city.append(total);
    } 
}

Dubai.render();

var Paris = {
    minCust: 20,
    maxCust: 38,
    aveCookieSale: 2.3,
    cookiesEachHour: [],

    render: function() {
        var city = document.createElement('li'); 
        city.textContent = ('Paris'); 
        storeInfo.appendChild(city);
        
        var totalCookiesPerDay = 0;
        for (var i = 0; i < hours.length; i++) {
            var list = document.createElement('li');
            var cookiesThisHour = Math.round(getRandomInt(this.minCust, this.maxCust)* this.aveCookieSale);
            list.textContent = hours[i] + ': ' + cookiesThisHour;
            totalCookiesPerDay += cookiesThisHour;
            city.appendChild(list);
        } 

        var total = document.createElement('li')
        total.textContent = 'total: ' + totalCookiesPerDay;
        city.append(total);
    } 
}

Paris.render();

var Lima = {
    minCust: 2,
    maxCust: 16,
    aveCookieSale: 4.6,
    cookiesEachHour: [],
    
    render: function() {
        var city = document.createElement('li'); 
        city.textContent = ('Lima'); 
        storeInfo.appendChild(city);
        
        var totalCookiesPerDay = 0;
        for (var i = 0; i < hours.length; i++) {
            var list = document.createElement('li');
            var cookiesThisHour = Math.round(getRandomInt(this.minCust, this.maxCust)* this.aveCookieSale);
            list.textContent = hours[i] + ': ' + cookiesThisHour;
            totalCookiesPerDay += cookiesThisHour;
            city.appendChild(list);
        } 

        var total = document.createElement('li')
        total.textContent = 'total: ' + totalCookiesPerDay;
        city.append(total);
    } 
}
Lima.render();

 