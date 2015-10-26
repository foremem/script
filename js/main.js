function main(){

	var a = new Date();
	a = a.valueOf();

	function fill(date){

		if ( !date ) {
			throw Error('There are not any arguments. Pass some arguments into the function!');
		}

		for(var i in date){

			switch (i) {

				case 'day':

					var dayFrom = date['dayInterval'][0];
					var dayTo = date['dayInterval'][1];

					date['day'] = randomValues(dayFrom, dayTo)();
					break;

				case 'month':

					var monthFrom = date['monthInterval'][0];
					var monthTo = date['monthInterval'][1];

					date['month'] = randomValues(monthFrom, monthTo)();
					break;

				case 'year':

					var yearFrom = date['yearInterval'][0];
					var yearTo = date['yearInterval'][1];

					date['year'] = randomValues(yearFrom, yearTo)();
					break;

				case 'hours':

					var hourFrom = date['hoursInterval'][0];
					var hourTo = date['hoursInterval'][1];

					date['hours'] = randomValues(hourFrom, hourTo)();
					break;

				case 'minutes':

					var minuteFrom = date['hoursInterval'][0];
					var minuteTo = date['hoursInterval'][1];

					date['minutes'] = randomValues(minuteFrom, minuteTo)();
					break;

			}
		}

		var intervals = ['dayInterval', 'monthInterval', 'yearInterval', 'hoursInterval'];

		for (var j = 0; j < intervals.length - 1; j++){

			var currentInterval = intervals[j];

			if( date.hasOwnProperty(currentInterval) ) delete date[currentInterval];

		}

		return date;

	}

	function mainDatePoints(){

		var def = 0;

		return (function(){

			var o = {
				day: def,
				month: def,
				year: def,
				hours: def,
				minutes: def,
			};

			Object.defineProperties(Object.prototype, {

				yearInterval: {
					value: [1950, 1995],
					writable: true,
					configurable: true,
					enumerable: false,
				},

				monthInterval: {
					value: [0, 11],
					writable: true,
					configurable: true,
					enumerable: false,
				},

				dayInterval: {
					value: [0, 30],
					writable: true,
					configurable: true,
					enumerable: false,
				},

				hoursInterval: {
					value: [0, 59],
					writable: true,
					configurable: true,
					enumerable: false,
				},

			});

			return o;

		});

	}

	function randomValues(min, max){

		return (function(){

			return Math.floor(Math.random()*(max - min) + min)

		});

	}


	var copy = (function(){

/*----------  If not IE returns function below ----------*/

		for(var i in {toString: null}){

			return function copy(o){

				for(var j = 1; j <= arguments.length - 1; j++){

					var source = arguments[j];

					for(var k in source){

						o[k] = source[k];

					}
				}

				return o;

			}


		}

/*----------  IF IE returns to varuable copy function below  ----------*/

	/*----------  Varuable with all nondenumerably properties  ----------*/

		var protoValues = [
							'toString',
							'valueOf',
							'toLocaleString',
							'hasOwnProperty',
							'getOwnPrototype',
							'propertyIsEnumerable'];

		return function copy(o){

			for(var j = 1; j <= arguments.length - 1; j++){

				var source = arguments[j];

				for(var k in source){

					o[k] = source[k];

				}

				/*----------  If arguments[j] has own protoValues[n] properties  ----------*/

				for (var n = 0; n <= protoValues.length - 1; n++) {

					var protoes = protoValues[n];

					if (source.hasOwnProperty(protoes)) o[protoes] = source[protoes];

				}
			}

			return o;

		}

	}());

	var respondents = (function(){
		var amount = 0
		return function respondents( amount ){

			var respondents = amount

			return respondents;

		}
	}()(10));

	var dateOfBirth = (function(){

		var amount = 0;

		return function respDate( amount ){

			var resp = {};

			for(var i = 0; i <= amount; i++){

				var dateObj = fill(mainDatePoints()());

				resp[i] = copy({}, dateObj);

			}

			return resp;

		}
	}()(respondents));

	var b = new Date();

	b = b.valueOf();

	var time = (b - a)/(60);

	console.log(parseFloat(time, 2));



	// console.log(dateOfBirth);
	// var initials = copy({}, arrs[1]);
	// var commonInformation = copy({},arrs[2]);


}