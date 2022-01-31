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
  ];
  render() {
    return (
      <div>
        <div className="flex h-screen min-h-full w-max flex-col bg-principal-background-color">
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
