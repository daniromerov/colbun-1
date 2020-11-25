
const provider = new firebase.auth.OAuthProvider('microsoft.com');

  
export async function logInGoogle(provider) {
    try {
      const userLogIn = await auth.signInWithPopup(provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = userLogIn.credential.accessToken;
      // The signed-in user info.
      const user = userLogIn.user;
      const currentUser = await auth.currentUser;
      currentUser.providerData.forEach((profile) => {
        data.collection('users').doc(currentUser.uid)
          .add({ name: profile.displayName, photo: profile.photoURL, biography: '' });
      });
    } catch (error) {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorCode, errorMessage);
    }
  }