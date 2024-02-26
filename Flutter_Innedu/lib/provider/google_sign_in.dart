import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';

import '../home/home_page.dart';
import '../onboarded/explore_page.dart';
import '../widget/bottom_navigation_bar.dart';

class GoogleSignInProvider{
  handleAuthState(){
    return StreamBuilder(
        stream: FirebaseAuth.instance.authStateChanges(),
        builder: (BuildContext context, snapshot){
          if (snapshot.hasData){
            return const HomeScreen();
          }else {
            return const ExploreScreen();
          }
        }
    );
  }




  Future<void> signInWithGoogle(BuildContext context) async {
    try {
      final GoogleSignInAccount? googleUser = await GoogleSignIn(
        scopes: <String>["email"],
      ).signIn();

      if (googleUser == null) {
        // The user cancelled the Google Sign In
        return;
      }

      final GoogleSignInAuthentication googleAuth = await googleUser.authentication;

      final credential = GoogleAuthProvider.credential(
        idToken: googleAuth.idToken,
        accessToken: googleAuth.accessToken,
      );

      await FirebaseAuth.instance.signInWithCredential(credential);

      // After successful sign-in, navigate to HomeScreen
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => BottomBarScreen()),
      );
    } catch (error) {
      print("Error signing in with Google: $error");
      // Handle error, show a message, etc.
    }
  }
  Future<void> signOut(BuildContext context) async {
    final GoogleSignIn googleSignIn = GoogleSignIn();

    try {
      await googleSignIn.signOut();
    } catch (error) {
      print("Error signing out from Google: $error");
      // Handle error, show a message, etc.
    }

    await FirebaseAuth.instance.signOut();

    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => ExploreScreen()),
    );
  }




}