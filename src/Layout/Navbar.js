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
      sectionName: "# Login",
      attributes: [
        { name: "Sign In", logo: NavBarIcons.signInLogo },
        { name: "Sign Up", logo: NavBarIcons.signUpLogo },
      ],
    },
    {
      sectionName: "# Summarize",
      attributes: [{ name: "Reports", logo: NavBarIcons.reportLogo }],
    },
  ];
  render() {
    return (
      <div>
        <div className="sticky top-0 bottom-0 hidden h-screen w-max flex-col bg-principal-background laptop:flex">
          <h2 className="mx-auto mt-10 mb-10 text-white">UserName</h2>
          {this.sectionAttributes.map(({ sectionName, attributes }) => {
            return (
              <NavBarSection
                key={sectionName}
                sectionName={sectionName}
                attributes={attributes}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavBar;
