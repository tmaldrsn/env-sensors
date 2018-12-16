import serial

if __name__ == "__main__":
	arduino = serial.Serial('/dev/ttyACM0', timeout=1, baudrate=9600)
	while True:
		print(str(arduino.readline()))
