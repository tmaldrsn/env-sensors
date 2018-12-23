# Goal

The goal of this project is to create a simple interface for displaying temperature and humidity readings using an arduino setup.

# Supplies
* ELEGOO Mega2560 R3 Controller Board
* DHT11 or DHT22 Temperature and Humidity Module
* LCD1602 Module (optional)

# Schematic
An example schematic along with a simple tutorial to build it can be found [here](https://www.hive-rd.com/blog/arduino-dht11-output-lcd-module/), and it includes the use of the display to show realtime sensor output.


# Methodology

The arduino code is written in C/C++ using the [Arduino IDE](https://www.arduino.cc/en/Main/Software), while the data processing aspect of the code is written mainly in Python using the [pyserial](https://pythonhosted.org/pyserial/) for serial output and [matplotlib](https://matplotlib.org/) for data visualization.


# How to use

Make sure [node](https://nodejs.org/en/download/) and npm are installed (I'm pretty sure npm comes with node.js installation). After cloning into the electron-dev branch, go to the root directory of the project and type one of the following commands.

* "npm start" ==> opens the desktop application
* "python3 src/test_run.py" ==> start collecting data from the arduino
* "python3 src/format_text.py" ==> format the most recent data


# TODO

* Show connections in electron window
* Show live data pulled from arduino
* Convert units from *C to *F
* Create custom menu in electron window
* Update functionality of menu options
* Update supplies section of README


