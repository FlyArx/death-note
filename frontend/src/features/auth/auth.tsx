import React from 'react';
import { useCurrentQuery } from '../../app/services/auth';

const Auth = ({ children }: { children: JSX.Element }) => {
	const current = useCurrentQuery();

	if (current.isLoading) {
		return <span> LOADING </span>;
	}

	return children;
};

export default Auth;
