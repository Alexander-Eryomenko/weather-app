import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const loginService = async ( email, password ) => {
	const auth = getAuth();
	try {
		const response = await signInWithEmailAndPassword(auth, email, password);
		return {
			success: true,
			user: response.user
		};
	} catch (error) {
		return {
			success: false,
			error: error.message
		};
	}
};

export const signUpService = async ( email, password ) => {
	const auth = getAuth();
	try {
		const response = await createUserWithEmailAndPassword(auth, email, password);
		return {
			success: true,
			user: response.user
		};
	} catch (error) {
		return {
			success: false,
			error: error.message
		};
	}
};
