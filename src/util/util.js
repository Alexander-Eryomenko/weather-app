export const getCityNames = (dataArray) => {
	return dataArray.map(city => city.name);
};

export const getRoundedNumber = (num) => {
	return String(Math.round(Number(num)));
};
