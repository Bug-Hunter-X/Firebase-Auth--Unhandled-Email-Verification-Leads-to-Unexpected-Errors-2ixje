# Firebase Authentication: Handling Unverified Emails

This repository demonstrates a common error in Firebase Authentication and provides a solution.  The error occurs when attempting to access user data before verifying the user's email address.  The solution involves explicitly checking the `user.emailVerified` property before accessing other user properties.

## The Problem

When a user registers with Firebase Authentication, their email address might not be immediately verified. Attempting to access user data, such as `user.uid` or `user.displayName`, before checking the `user.emailVerified` property can cause unexpected errors and application crashes. 

## The Solution

The solution is simple: Always check the `user.emailVerified` property before using any other user data. This ensures your application gracefully handles users with unverified emails.

## Usage

The `unverifiedEmailError.js` file shows the problematic code that leads to an error.  The `verifiedEmailSolution.js` demonstrates the corrected code that handles unverified emails correctly.
