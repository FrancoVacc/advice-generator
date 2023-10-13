import mobilepattern from "../assets/pattern-divider-mobile.svg";
import desktoppattern from "../assets/pattern-divider-desktop.svg";

const screenWidth = window.screen.width;
console.log(screenWidth);

const Divider = () => {
  if (screenWidth > 425) {
    return <img src={desktoppattern} alt="" />;
  }

  return <img src={mobilepattern} alt="" />;
};

export default Divider;
