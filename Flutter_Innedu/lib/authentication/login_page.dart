import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:http/http.dart' as http;
import '../../model/theme_model.dart';
import '../home/home_page.dart';
import 'package:jwt_decoder/jwt_decoder.dart';


class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isLoading = false;
  bool isActive = false;
  bool hidePassword = false;
  ColorNotifire notifier = ColorNotifire();

  Future<void> _login() async {
    setState(() {
      _isLoading = true;
    });

    final String email = _emailController.text.trim();
    final String password = _passwordController.text.trim();

    // Make a POST request to your backend API to authenticate the user
    final response = await http.post(
      Uri.parse('https://reqres.in/api/login'),
      body: {
        'email': email,
        'password': password,
      },
    );
    if (response.statusCode == 200) {
      // Successful login

      // Extract the token from the response body
      final token = jsonDecode(response.body)['token'];
      print('Received token: $token');
      // Decode the token to get the user information
      // final Map<String, dynamic> decodedToken = JwtDecoder.decode(token);


      // TODO: Save the token and user information for future use

      // Navigate to the home screen
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => HomeScreen()),
      );
    } else {
      // Failed login
      showDialog(
        context: context,
        builder: (context) =>
            AlertDialog(
              title: Text('Error'),
              content: Text('Invalid email or password'),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text('OK'),
                ),
              ],
            ),
      );
    }
    setState(() {
      _isLoading = false;
    });
  }

    @override
    Widget build(BuildContext context) {
      notifier = Provider.of<ColorNotifire>(context, listen: true);
      return Scaffold(
        backgroundColor: notifier.background,
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(15),
            child: SingleChildScrollView(
              physics: const BouncingScrollPhysics(),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(height: 30),
                  Center(
                    child: Image.asset(
                      "assets/images/splash_logo.png",
                      scale: 10.5,
                      color: notifier.imageColor,
                    ),
                  ),
                  Center(
                    child: Text(
                      "Welcome Back!",
                      style: TextStyle(
                        fontFamily: 'Manrope_bold',
                        fontSize: 32,
                        color: notifier.textColor,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                  const SizedBox(height: 10),
                  Center(
                    child: Text(
                      "Please login first to start your SkillMaster course",
                      style: TextStyle(
                        fontSize: 13,
                        color: notifier.textColorGrey,
                        fontFamily: 'Manrope_semibold',
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ),
                  const SizedBox(height: 50),
                  Text(
                    textAlign: TextAlign.start,
                    "Email Address",
                    style: TextStyle(
                      fontFamily: 'Manrope_bold',
                      fontSize: 14,
                      color: notifier.textColor,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Container(
                    height: 56,
                    width: double.infinity,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(25),
                      border: Border.all(
                        color: notifier.textField,
                        width: 1,
                      ),
                    ),
                    child: TextField(
                      style: TextStyle(
                        fontFamily: 'Manrope_bold',
                        fontSize: 14,
                        color: notifier.textColor,
                        fontWeight: FontWeight.w500,
                      ),
                      controller: _emailController,
                      keyboardType: TextInputType.text,
                      decoration: InputDecoration(
                        contentPadding: const EdgeInsets.all(18),
                        hintText: "Input your email account!",
                        hintStyle: TextStyle(
                          fontFamily: 'Manrope_bold',
                          fontSize: 14,
                          color: notifier.textField,
                          fontWeight: FontWeight.w500,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(15),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  Text(
                    "Password",
                    style: TextStyle(
                      fontSize: 14,
                      fontFamily: 'Manrope_bold',
                      color: notifier.textColor,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Container(
                    height: 56,
                    width: double.infinity,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(25),
                      border: Border.all(
                        color: notifier.textField,
                        width: 1,
                      ),
                    ),
                    child: TextField(
                      obscureText: true,
                      style: TextStyle(
                        fontFamily: 'Manrope_bold',
                        fontSize: 14,
                        color: notifier.textColor,
                        fontWeight: FontWeight.w500,
                      ),
                      controller: _passwordController,
                      keyboardType: TextInputType.text,
                      decoration: InputDecoration(
                        contentPadding: const EdgeInsets.all(18),
                        hintText: "Input your password account",
                        hintStyle: TextStyle(
                          fontFamily: 'Manrope_bold',
                          fontSize: 14,
                          color: notifier.textField,
                          fontWeight: FontWeight.w500,
                        ),
                        suffixIcon: IconButton(
                          color: const Color(0xff94A3B8),
                          onPressed: () {
                            setState(() {
                              hidePassword = !hidePassword;
                            });
                          },
                          icon: Icon(
                            hidePassword ? Icons.visibility_off : Icons
                                .visibility,
                          ),
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(15),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 10),
                  Row(
                    children: [
                      Checkbox(
                          side: MaterialStateBorderSide.resolveWith(
                                (states) =>
                                BorderSide(color: notifier.checkBox),
                          ),
                          activeColor: const Color(0xff0056D2),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(5),
                            side: BorderSide(color: notifier.checkBox),
                          ),
                          value: isActive,
                          onChanged: (val) {
                            setState(() {
                              isActive = val!;
                            });
                          }),
                      Text(
                        "Remember Me",
                        style: TextStyle(
                          fontSize: 14,
                          fontFamily: 'Manrope_semibold',
                          fontWeight: FontWeight.w400,
                          color: notifier.textField,
                        ),
                      ),
                      const Spacer(),
                      GestureDetector(
                        onTap: () {
                          Navigator.of(context).pushNamed("number");
                        },
                        child: Text(
                          "Forget Password",
                          style: TextStyle(
                            fontSize: 14,
                            fontFamily: 'Manrope_semibold',
                            fontWeight: FontWeight.w400,
                            color: notifier.textField,
                          ),
                        ),
                      ),
                    ],
                  ),
                  Center(
                    child: SizedBox(
                      height: 56,
                      width: double.infinity,
                      child: ElevatedButton(
                        style: ButtonStyle(
                          elevation: MaterialStateProperty.all(0),
                          backgroundColor:
                          MaterialStateProperty.all(const Color(0xff0056D2)),
                          shape: MaterialStateProperty.all(
                            RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(25),
                            ),
                          ),
                        ),
                        // onPressed: () {
                        //   Navigator.of(context).pushNamed("home");
                        // },
                        onPressed: _isLoading ? null : _login,
                        child: _isLoading ? CircularProgressIndicator() : const Text(
                          "Login",
                          style: TextStyle(
                            fontSize: 16,
                            fontFamily: 'Manrope_bold',
                            color: Colors.white,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                  GestureDetector(
                    onTap: () {
                      Navigator.of(context).pushNamed("sign_up");
                    },
                    child: const Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "New to InnEdu?",
                          style: TextStyle(
                            fontSize: 14,
                            fontFamily: 'Manrope_semibold',
                            color: Color(0xff64748B),
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        Text(
                          " Create Account",
                          style: TextStyle(
                            fontSize: 14,
                            fontFamily: 'Manrope_bold',
                            color: Color(0xff0056D2),
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    }
  }

