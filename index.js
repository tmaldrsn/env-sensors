const { app, Menu, BrowserWindow } = require('electron');
let win;

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({ width: 800, height: 600 });

	// and load the index.html of the app
	win.loadFile('index.html');

	// Emitted when the window is close.
	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});


// MENU SETUP //
const template = [
	{
		label: "File",
		submenu: [
			{ type: 'separator' },
			{ role: 'minimize' },
			{ role: 'close' },
		]
	},
	{
		label: "Devices",
		submenu: [
		]
	},
	{
		label: "Data",
		submenu: [
			{ label: 'Start Data Collection' },
			{ label: 'End Data Collection' },
		]
	},
	{
		label: "Help",
		submenu: [
			{ role: "toggleDevTools" },
		]
	},	
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

