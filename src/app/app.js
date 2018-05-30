/**
 * Main entry file for application.
 */
import { Veams } from './app.veams';
import Navigation from './core/components/navigation/scripts/navigation';
import Slider from './shared/components/slider/scripts/slider';

// Initialize modules with Veams

Veams.modules.add({ namespace: 'navigation', module: Navigation });

// Init Slider
Veams.modules.add({ namespace: 'slider', module: Slider });

/**
 * Solution function
 */
function Solution(A, B, C, D, E, F) {
	let numArr = [A, B, C, D, E, F].sort().reverse();
	let temp = [ ...numArr ];
	let tmpArr = [];
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	for (let i = 0; i <= temp.length; i++) {
		let digit = temp[ 0 ];

		for (let j = 0; j <= temp.length; j++) {
			if (digit >= 6) {
				if (temp[ j ] < 6) {
					digit = temp[ j ];

					tmpArr.push(temp[ 0 ]);
					temp.splice(0, 1);
					tmpArr.push(digit);
					temp.splice(j - 1, 1);

					break;
				}
			} else {
				tmpArr.push(temp[ 0 ]);
				temp.splice(0, 1);
			}
		}

		if(i === temp.length) {
			tmpArr = tmpArr.concat(temp);
		}
	}

	tmpArr = tmpArr.reverse();

	hours = parseInt(`${tmpArr[ 0 ]}${tmpArr[ 1 ]}`, 10);
	minutes = parseInt(`${tmpArr[ 2 ]}${tmpArr[ 3 ]}`, 10);
	seconds = parseInt(`${tmpArr[ 4 ]}${tmpArr[ 5 ]}`, 10);

	if (isNaN(hours) || hours > 23 || isNaN(minutes) || minutes > 59 || isNaN(seconds) || seconds > 59) {
		return 'NOT POSSIBLE';
	} else {
		return `${tmpArr[ 0 ]}${tmpArr[ 1 ]}:${tmpArr[ 2 ]}${tmpArr[ 3 ]}:${tmpArr[ 4 ]}${tmpArr[ 5 ]}`;
	}
}

// Test Cases
function Test() {
	console.log(Solution(0, 0, 0, 7, 8, 9));
	console.log(Solution(1, 8, 2, 4, 6, 3));
	console.log(Solution(2, 4, 5, 5, 9, 9));
	console.log(Solution(6, 2, 8, 1, 9, 9));
	console.log(Solution(0, 1, 1, 1, 0, 2));
	console.log(Solution(0, 3, 7, 2, 0, 5));
	console.log(Solution(2, 1, 9, 6, 4, 0));
}

Test();

// @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true //
// @INSERTPOINT :: @ref: js-init-once, @keep: true //