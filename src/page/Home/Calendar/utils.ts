export const getNumberOfDaysInMonth = (month: number, isMoonYear: boolean) => {
	if (
		month === 1 ||
		month === 3 ||
		month == 5 ||
		month == 7 ||
		month == 8 ||
		month == 10 ||
		month == 12
	) {
		return 31;
	} else if (month == 2) {
		if (isMoonYear) return 29;
		else return 28;
	} else {
		return 30;
	}
};

export const isMoonYear = (year: number): boolean => {
	if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) return true;
	else return false;
};

export const getFirstDateOfMonth = (year: number, month: number): Date => {
	return new Date(year, month, 1);
};
