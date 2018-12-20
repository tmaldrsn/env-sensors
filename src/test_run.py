import os
import datetime
import warnings
import serial
import serial.tools.list_ports

def get_arduino(serial_number):
	for pinfo in serial.tools.list_ports.comports():
		if pinfo.serial_number == serial_number: 
			#print("Device connected to port: " + pinfo.device)
			return serial.Serial(pinfo.device)
	raise IOError("Could not find your Arduino, AVRDUDE")


if __name__ == "__main__": 
	start_time = datetime.datetime.today()

	#port = '/dev/ttyACM0'
	#port = '/dev/ttyACM1'
	port = get_arduino(serial_number='55736303739351A0E022')
	

	arduino = serial.Serial(port, timeout=None, baudrate=9600)
	filename = '../sample_data/' + start_time.strftime("%Y%m%dT%H%M%S") + ".txt"
	with open(filename, 'w+') as f:
		while True:	
			if arduino.readline() != "":
			#	print(arduino.readline())
				data_time = datetime.datetime.today() - start_time
				data_time_s = str(data_time.seconds)[:7] + "." + str(data_time.microseconds * 1000)
				
				print(data_time_s, str(arduino.readline())	
				f.write(data_time_s + " " + str(arduino.readline()))
