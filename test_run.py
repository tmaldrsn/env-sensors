import os
import time
import serial


if __name__ == "__main__": 

	start_time = time.time()

	arduino = serial.Serial('/dev/ttyACM0', timeout=1, baudrate=9600)
	with open('data.txt', 'w+') as f:
		while True:	
			if arduino.readline().decode() != "":
				data_time = time.time() - start_time	
				f.write('\n')
				
				print(data_time, str(arduino.readline().decode()))	
				f.write(str(data_time) + " " + str(arduino.readline().decode()))
