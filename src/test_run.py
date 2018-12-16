import os
import time
import serial


if __name__ == "__main__": 

	start_time = time.time()

	port = '/dev/ttyACM0'
	#port = '/dev/ttyACM1'

	arduino = serial.Serial(port, timeout=None, baudrate=9600)
	with open('data.txt', 'w+') as f:
		while True:	
			if arduino.readline().decode() != "":
			#	print(arduino.readline())
				data_time = time.time() - start_time	
				f.write('\n')
				
				print(data_time, str(arduino.readline().decode()))	
				f.write(str(data_time) + " " + str(arduino.readline().decode()))
