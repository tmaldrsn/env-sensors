import os
import glob
from matplotlib import pyplot as plt

if __name__ == "__main__":
	data_folder = glob.glob('../sample_data/*.txt')
	if not data_folder:
		raise Exception('There is no data present in the folder')

	most_recent = max(data_folder, key=os.path.getctime)
	print(most_recent)	
	with open(most_recent, 'r+') as f:
		text = f.read()

	times = []
	temps = []
	humds = []	
	for line in text.split('\n\n')[:-1]:
		times.append(float(line.split(" ")[0]))
		temps.append(float(line.split(" ")[1]))
		humds.append(float(line.split(" ")[2]))

	#print(times, temps, humds)

	plt.figure(1)

	plt.subplot(211)
	plt.title("Arduino Temperature & Humidity Readings")
	plt.xlabel("Time After Initial Reading (s)")
	plt.ylabel("Temperature (\u00b0C)")	
	plt.plot(times, temps)

	plt.subplot(212)
	plt.xlabel("Time After Initial Reading (s)")
	plt.ylabel("Humidity (%)")
	plt.plot(times, humds)

	plt.tight_layout()
	plt.show()
