import { firebase, facebookAuthProvider, githubAuthProvider, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const startLoginWithFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
};

export const startLoginWithGithub = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
    }
};


export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};