export function getAdminMenuConfig( name, defaultValue = undefined ) {
	if ( ! window.ystdbAdminMenuConfig ) {
		return defaultValue;
	}
	if ( ! window.ystdbAdminMenuConfig.hasOwnProperty( name ) ) {
		return defaultValue;
	}
	return window.ystdbAdminMenuConfig[ name ];
}

export function getAdminMenuOption( section, name, defaultValue = undefined ) {
	if ( ! window.ystdbAdminMenuOptions ) {
		return defaultValue;
	}
	if ( ! window.ystdbAdminMenuOptions.hasOwnProperty( 'options' ) ) {
		return defaultValue;
	}
	if ( ! window.ystdbAdminMenuOptions.options.hasOwnProperty( section ) ) {
		return defaultValue;
	}
	if ( ! window.ystdbAdminMenuOptions.options[ section ].hasOwnProperty( name ) ) {
		return defaultValue;
	}
	return window.ystdbAdminMenuOptions.options[ section ][ name ];
}

export const SUCCESS = 'success';
export const ERROR = 'error';

export function isApiSuccess( status ) {
	return SUCCESS === status;
}

export function isApiError( status ) {
	return ERROR === status;
}

export function getEndpoint( route ) {
	const namespace = getAdminMenuConfig( 'endpointNamespace' );
	if ( ! namespace ) {
		console.error( 'Namespaceが見つかりません' );
		return undefined;
	}
	return namespace + '/' + route;
}
