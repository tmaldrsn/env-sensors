

if __name__ == "__main__":
	with open('data.txt', 'r+') as f:
		text = f.read()

	result_array = text.split("\\r\\n'b'")[3:-2]

	temp_lines = []
	humd_lines = []

	for result in result_array:
		if result[0] == "T":
			temp_lines.append(result)
		elif result[0] == "H":
			humd_lines.append(result)

	if humd_lines[-1] == "'":
		humd_lines[-1] = humd_lines[-1][:-7]
	if temp_lines[-1] == "'":
		temp_lines[-1] == temp_lines[-1][:-7]

	#print('\n'.join(temp_lines))
	#print('\n'.join(humd_lines))

	temps = []
	humds = []	
	for temp in temp_lines:
		temps.append(float(temp.split()[-1]))
	for humd in humd_lines:
		humds.append(float(humd.split()[-1]))

	print(temps, humds)
