import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../model/theme_model.dart';
import '../../model/profile_model.dart';
import '../provider/google_sign_in.dart';
import '../screens/account and setting/detail_profile.dart';
import '../screens/account and setting/payment_account.dart';
import '../widget/button.dart';
import '../widget/profile_details.dart'; // Import your profile model

class MyAccount extends StatefulWidget {
  const MyAccount({Key? key}) : super(key: key);

  @override
  State<MyAccount> createState() => _MyAccountState();
}

class _MyAccountState extends State<MyAccount> {
  ColorNotifire notifier = ColorNotifire();

  @override
  Widget build(BuildContext context) {
    notifier = Provider.of<ColorNotifire>(context, listen: true);
    var width = MediaQuery.of(context).size.width;
    var height = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: notifier.background,
      appBar: AppBar(
        backgroundColor: notifier.background,
        elevation: 0,
        automaticallyImplyLeading: false,
        title: Text(
          "My Profile",
          style: TextStyle(
            fontWeight: FontWeight.w700,
            fontFamily: "Manrope_bold",
            fontSize: 20,
            color: notifier.textColor,
          ),
        ),
      ),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Padding(
          padding: EdgeInsets.all(15),
          child: Column(
            children: [
              // Use a ListView.builder to dynamically create accountDetails widgets
              ListView.builder(
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
                itemCount: profileDetails.length,
                itemBuilder: (context, index) {
                  ProfileDetails profile = profileDetails[index];

                  return accountDetails(
                    image: profile.icon,
                    name: profile.name,
                    desc: profile.desc,
                    onPress: () {
                      // Function to be executed when the arrow icon is pressed.
                      // You can navigate to a specific page here.
                      // Example:
                      NavigationUtility.navigateToProfilePage(context, profile);
                    },
                  );
                },
              ),
              SizedBox(height: MediaQuery.of(context).size.height / 55),
              button(
                onPress: (){
                  GoogleSignInProvider().signOut(context);
                },
                text: "Logout",
                color: const Color(0xff0056D2),
              ),
            ],

          ),
        ),
      ),
    );
  }
}

// Example DetailPage Widget
class NavigationUtility {
  static void navigateToProfilePage(BuildContext context, ProfileDetails profile) {
    // Use a switch statement or if-else conditions to navigate to different pages based on the selected profile.
    switch (profile.type) {
      case "Type1":
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const ProfileDetail(),
          ),
        );
        break;
      case "Type3":
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const PaymentMethod(),
          ),
        );
        break;
      case "Type4":
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const PaymentMethod(),
          ),
        );
        break;
      // case ProfileType.Type2:
      //   Navigator.push(
      //     context,
      //     MaterialPageRoute(
      //       builder: (context) => AnotherDetailPage(profile: profile),
      //     ),
      //   );
      //   break;
    // Add more cases for other profile types as needed.
      default:
      // Default case, navigate to a default page or do nothing.
        break;
    }
  }
}
