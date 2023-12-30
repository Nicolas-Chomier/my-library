// Constants for months and date pattern validation
export const constants = {
	Fr: {
		months: [
			'Janvier',
			'Février',
			'Mars',
			'Avril',
			'Mai',
			'Juin',
			'Juillet',
			'Août',
			'Septembre',
			'Octobre',
			'Novembre',
			'Décembre',
		],

		datePattern: new RegExp(
			'(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(\\d{4})',
		),
		errorMessage: 'Ordre des dates erronée',
		limitMessage:
			'La date est au dessus ou au dessous des limites définies !',
		dateFormat: 'JJ/MM/AAAA',
		locales: 'fr-FR',
		ambienceText: {
			addYear: 'Année suivante',
			addMonth: 'Mois suivant',
			removeYear: 'Année précédente',
			removeMonth: 'Mois précédent',
		},
	},
	Us: {
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],

		datePattern: new RegExp(
			'(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/(\\d{4})',
		),
		errorMessage: 'Start Date must be lower than End Date !',
		limitMessage: 'Date is above or under specified limits !',
		inputTextError: 'Undefined',
		dateFormat: 'mm/dd/yyyy',
		locales: 'en-US',
		ambienceText: {
			addYear: 'Next year',
			addMonth: 'Next month',
			removeYear: 'Last year',
			removeMonth: 'Last month',
		},
	},
};
