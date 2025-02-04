const auth = firebase.auth();

// Get the currently signed-in user
const user = auth.currentUser;

if (user) {
  // Check if the email is verified
  if (user.emailVerified) {
    // Access user data safely
    const uid = user.uid;
    const displayName = user.displayName;
    console.log('User ID:', uid);
    console.log('Display Name:', displayName);
  } else {
    // Handle the case where the email is not verified
    console.log('Email not verified. Please verify your email.');
    // Redirect the user to the email verification page or display a message
  }
} else {
  // Handle the case where the user is not signed in
  console.log('User not signed in.');
}
