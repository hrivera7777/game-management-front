import { Component } from "react";
import NavBarIcons from "../Components/Navbar/NavBarIcons";
import NavBarSection from "../Components/Navbar/NavBarSection";

class NavBar extends Component {
  sectionAttributes = [
    {
      sectionName: "# Services",
      attributes: [
        { name: "Games", logo: NavBarIcons.gameLogo },
        { name: "Favorites", logo: NavBarIcons.favoriteLogo },
      ],
    },
    {
      sectionName: "# Summarize",
      attributes: [{ name: "Reports", logo: NavBarIcons.reportLogo }],
    },
    {
      sectionName: "# Logout",
      attributes: [{ name: "Logout", logo: NavBarIcons.logoutLogo }],
    },
  ];

  selectFields(roleName) {
    console.log(this.sectionAttributes);
    return this.sectionAttributes.map(({ sectionName, attributes }) => {
      console.log(roleName);
      return roleName === "admin" ? (
        <NavBarSection
          key={sectionName}
          sectionName={sectionName}
          attributes={attributes}
        />
      ) : sectionName != "# Summarize" ? (
        <NavBarSection
          key={sectionName}
          sectionName={sectionName}
          attributes={attributes}
        />
      ) : null;
    });
  }
  render() {
    const payload = JSON.parse(
      atob(localStorage.getItem("token").split(".")[1])
    );
    const { name, roleName } = payload;
    return (
      <div className="sticky top-0 bottom-0 hidden h-screen w-max flex-col overflow-y-auto bg-principal-background laptop:flex">
        <h2 className="mx-auto mt-10 mb-4 text-white">
          Hi <span className="font-bold">{name}</span>
        </h2>
        <h2 className="mx-auto mb-10 text-white">
          your role is <span className="font-bold">{roleName}</span>
        </h2>
        {this.selectFields(roleName)}
      </div>
    );
  }
}

export default NavBar;
