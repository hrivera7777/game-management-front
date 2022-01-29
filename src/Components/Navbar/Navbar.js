import { Component } from "react";
import NavBarIcons from "./NavBarIcons";
import NavBarSection from "./NavBarSection";

class NavBar extends Component {
  sectionAttributes = [
    {
      sectionName: "services",
      attributes: [
        { name: "Games", logo: NavBarIcons.gameLogo },
        { name: "Favorites", logo: NavBarIcons.favoriteLogo },
      ],
    },
    {
      sectionName: "login",
      attributes: [
        { name: "Sign In", logo: NavBarIcons.signInLogo },
        { name: "Sign Up", logo: NavBarIcons.signUpLogo },
      ],
    },
  ];
  render() {
    return (
      <div>
        <div className="flex flex-col">
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
