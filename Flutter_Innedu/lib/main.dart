import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'authentication/login_page.dart';
import 'authentication/sign_up_page.dart';
import 'home/home_page.dart';
import 'model/theme_model.dart';
import 'onboarded/explore_page.dart';
import 'onboarded/get_started_page.dart';
import 'onboarded/onboard_page.dart';
import 'onboarded/splash.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // try {
  //   await Firebase.initializeApp();
  // } catch (e) {
  //   print('Error initializing Firebase: $e');
  // }

  // await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        MultiProvider(
          providers: [
            ChangeNotifierProvider(
              create: (context) => ColorNotifire(),
            ),
          ],
          builder: (_, context) {
            return MaterialApp(
              home: SplashScreen(),
              routes: {
                'splash': (context) => const SplashScreen(),
                'onboard': (context) => const OnBoardingScreen(),
                'get_started': (context) => const GetStartedScreen(),
                'explore': (context) => const ExploreScreen(),
                'login': (context) => const LoginScreen(),
                'sign_up': (context) => const SignUpScreen(),
                'home': (context) => const HomeScreen(),
              },
            );
          },
        ),
      ],
    );
  }
}
