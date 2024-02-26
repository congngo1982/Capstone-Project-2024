class ProfileDetails {
  String icon;
  String name;
  String desc;
  String type;

  ProfileDetails({
    required this.icon,
    required this.name,
    required this.desc,
    required this.type
  });
}

List<ProfileDetails> profileDetails = [
  ProfileDetails(
    icon: "assets/icons/profile_1.png",
    name: "Detail Profile",
    desc: "Information account",
    type: "Type1"
  ),
  ProfileDetails(
    icon: "assets/icons/profile_2.png",
    name: "Identify",
    desc: "Verification status setting",
      type: "Type2"
  ),
  ProfileDetails(
    icon: "assets/icons/profile_3.png",
    name: "Transaction History",
    desc: "Your transaction history",
      type: "Type3"
  ),
  ProfileDetails(
    icon: "assets/icons/profile_4.png",
    name: "Payment Account",
    desc: "Manage your payment",
      type: "Type4"
  ),
];
