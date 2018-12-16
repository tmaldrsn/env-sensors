

if __name__ == "__main__":
	with open('data.txt', 'r+') as f:
		text = f.read()

	result_array = text.split("\\r\\n'b'")[3:]
	

	temps = []
	humds = []

	for result in result_array:
		if result[0] == "T":
			temps.append(result)
		elif result[0] == "H":
			humds.append(result)

	print('\n'.join(temps))
	print('\n'.join(humds))
