const fs = require('fs');
const path = require('path');
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const files = fs.readdirSync(path.join(__dirname, 'sample_data/'));

let fileElement = document.getElementById("files");

for (let i = 0; i < files.length; i++) {
    let rowElement = document.createElement("tr");
    
    let dateText = [files[i].slice(4, 6), files[i].slice(6, 8), files[i].slice(0, 4)].join('/') 
    let dateElement = document.createElement("td");
    dateElement.innerText = dateText;
    rowElement.appendChild(dateElement);

    let timeText = [files[i].slice(9, 11), files[i].slice(11, 13), files[i].slice(13, 15)].join(':');
    let timeElement = document.createElement("td");
    timeElement.innerText = timeText;
    rowElement.appendChild(timeElement);

    if (files[i].slice(-4) == ".png" && files[i+1].slice(-4) == ".txt") {
        let textFile = files[i+1];
        let textFileElement = document.createElement('td');
        textFileElement.class = "fileLink";
        let textLink = document.createElement('img');
        textLink.src = 'assets/img/txt_file_icon.png';
        textLink.height = '32';
        textLink.width = '32';
        textLink.onclick = (() => {openFile(textFile)});
    
        textFileElement.appendChild(textLink);
        rowElement.appendChild(textFileElement);

        let graphFile = files[i];
        let graphFileElement = document.createElement('td');
        graphFileElement.class = "fileLink";
        let graphLink = document.createElement('img');
        graphLink.src = 'assets/img/png_file_icon.png';
        graphLink.height = '32';
        graphLink.width = '32';
        graphLink.onclick = (() => {openFile(graphFile)});
        
        graphFileElement.appendChild(graphLink);
        rowElement.appendChild(graphFileElement);
        fileElement.appendChild(rowElement);

    } else if (files[i].slice(-4) == ".txt" && files[i-1].slice(-4) != ".png") {
        let textFile = files[i];
        let textFileElement = document.createElement('td');
        textFileElement.class = "fileLink";
        let textLink = document.createElement('img');
        textLink.src = 'assets/img/txt_file_icon.png';
        textLink.height = '32';
        textLink.width = '32';
        textLink.onclick = (() => {openFile(textFile)});
    
        textFileElement.appendChild(textLink);
        rowElement.appendChild(textFileElement);
        fileElement.appendChild(rowElement);

    } else if (files[i].slice(-4) == ".png") {
        let emptyCol = document.createElement('td');

        let graphFile = files[i];
        let graphFileElement = document.createElement('td');
        graphFileElement.class = "fileLink";
        let graphLink = document.createElement('img');
        graphLink.src = 'assets/img/png_file_icon.png';
        graphLink.height = '32';
        graphLink.width = '32';
        graphLink.class = "fileLink";
        graphLink.onclick = (() => {openFile(graphFile)});
        
        graphFileElement.appendChild(graphLink);
        rowElement.appendChild(emptyCol);
        rowElement.appendChild(graphFileElement);
        fileElement.appendChild(rowElement);
    }

}

function openFile(file) {
    let win;
    if (file.slice(-4) == ".png") {
        win = new BrowserWindow({width: 640, height: 480});
    } else if (file.slice(-4) == ".txt") {
        win = new BrowserWindow({width: 300, height: 400 });
    }

    win.loadFile(path.join('./sample_data/' + file));
    
    win.on('closed', () => {
        win = null;
    });
}
