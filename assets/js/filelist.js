const fs = require('fs');
const path = require('path');
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const files = fs.readdirSync(path.join(__dirname, 'sample_data/'));

let fileElement = document.getElementById("files");

for (let i = 0; i < files.length; i++) {
    let filename = files[i];
    let d = [filename.slice(4, 6), filename.slice(6, 8), filename.slice(0, 4)].join('/');
    let t = [filename.slice(9, 11), filename.slice(11, 13), filename.slice(13, 15)].join(':');
    //document.write('<li><a>' + d + " " + t + '</a></li>');
    
    let listElement = document.createElement('li');

    if (filename.slice(-4) == ".txt") {
        let linkElement = document.createElement('a');
        linkElement.onclick = function() {openFile('sample_data/' + filename)};
        linkElement.style.textDecoration = "underline";		
        linkElement.style.cursor = "pointer";
        
        let linkNameNode = document.createTextNode(d + " " + t + " - RAW");	
        linkElement.appendChild(linkNameNode);
        listElement.appendChild(linkElement);
    }
    else if (filename.slice(-4) == ".png") {	
        let graphLinkElement = document.createElement('a');
        graphLinkElement.onclick = function() {openFile('sample_data/' + filename)};
        graphLinkElement.style.textDecoration = "underline";
        graphLinkElement.style.cursor = "pointer";
    
        let graphNameNode = document.createTextNode(d + " " + t + " - GRAPH");
        graphLinkElement.appendChild(graphNameNode);
        listElement.appendChild(graphLinkElement);
    }
    
    fileElement.appendChild(listElement);
}


function openFile(file) {
    let win;
    if (file.slice(-4) == ".png") {
        win = new BrowserWindow({ width: 640, height: 480});
    } else if (file.slice(-4) == ".txt") {
        win = new BrowserWindow({ width: 300, height: 400 });
    }
      
    win.loadFile(file);
    win.on('closed', () => {
        win = null;
    });
}
