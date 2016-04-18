export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const CLICK_HEADING = 'CLICK_HEADING';

export function changeHeading() {
	return {
		type: CLICK_HEADING
	};
}

export function incrementCounter() {
	return {
		type: INCREMENT_COUNTER
	};
}

export function decrementCounter() {
	return {
		type: DECREMENT_COUNTER
	};
}