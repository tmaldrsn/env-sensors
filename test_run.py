import os
import serial

if __name__ == "__main__": 

	arduino = serial.Serial('/dev/ttyACM0', timeout=1, baudrate=9600)
	with open('data.txt', 'w+') as f:
		while True:
			f.write(str(arduino.readline()))
