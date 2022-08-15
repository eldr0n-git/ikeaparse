'use strict';

import fetchData from './modules/fetcher.js';

const ikeaUrl = 'https://e-docs.azurewebsites.net/edocs/v1/articleinfo';
const requestData = { artNo: '50437235', supplierNo: null };
let fetchingData = undefined;
const myconsole = document.getElementById('console');
const checkArts = document.getElementById('checkArts');
const fetchButton = document.getElementById('fetchButton');

function writeConsole(message) {
    const innertext = myconsole.innerHTML;
    myconsole.innerHTML = `${innertext} ${message} <br>`;
}

function operationDetector(operation) {
    switch (operation) {
        case '1':
            console.log('Operation 1');
            writeConsole('Checking articles list...');
            break;
        case '2':
            console.log('Operation 2');
            setTimeout(function () {
                fetchingData = fetchData(requestData, ikeaUrl);
            }, 0);

            writeConsole(`Getting remote data from ${ikeaUrl}`);
            break;
        case '3':
            console.log('Operation 3');
            writeConsole('Operation 3');
            break;
        case '4':
            console.log('Operation 4');
            writeConsole('Operation 4');
            break;
        default:
            console.log('Operation 0');
            writeConsole('Operation 0');
            break;
    }
}

checkArts.addEventListener('click', function () {
    operationDetector('1');
});
fetchButton.addEventListener('click', function () {
    operationDetector('2');
});
