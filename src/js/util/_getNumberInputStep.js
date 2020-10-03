export default function getNumberInputStep( unit ) {
	if ( 'em' === unit || 'rem' === unit ) {
		return 0.1;
	}
	return 1;
};
