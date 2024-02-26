import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../model/theme_model.dart';
import '../../model/profile_model.dart';
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
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => DetailPage(profile: profile),
                        ),
                      );
                    },
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// Example DetailPage Widget
class DetailPage extends StatelessWidget {
  final ProfileDetails profile;

  const DetailPage({Key? key, required this.profile}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Implement the UI for the detailed page using the 'profile' parameter
    return Scaffold(
      appBar: AppBar(
        title: Text(profile.name),
      ),
      body: Center(
        child: Text(profile.desc),
      ),
    );
  }
}
