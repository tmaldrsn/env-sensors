const { app, Menu, BrowserWindow } = require('electron');
let win;

const template = [
	{
		label: 'File',
		submenu: [
			{role: 'undo'},
			{role: 'redo'}
		]
	},
	{
		label: 'Data',
		submenu: [
			{role: 'reload'},
			{role: 'toggledevtools'}
		]
	},
	{
		role: 'window',
		submenu: [
			{role: 'minimize'},
			{role: 'close'}
		]
	}
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);


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
