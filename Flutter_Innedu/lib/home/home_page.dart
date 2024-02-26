import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../provider/google_sign_in.dart';


class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home Page'),
      ),

      floatingActionButton: FloatingActionButton(
        onPressed: (){
          GoogleSignInProvider().signOut(context);
        },
      ),
    );
  }
}
