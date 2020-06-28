import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/services/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";
import AnimatedSplash from "react-native-animated-splash-screen";

console.disableYellowBox = true;

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    StatusBar.setBarStyle("light-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 10550);
  }, []);

  return (
    <>
      <AnimatedSplash
        logoWidth={300}
        logoHeight={300}
        logoImage={null}
        isLoaded={isLoaded}
        backgroundColor={null}
        imageBackgroundResizeMode="cover"
        imageBackgroundSource={require("./assets/splash/lucas-benjamin-unsplash.jpg")}
      >
        <Navigation />
      </AnimatedSplash>
    </>
  );
};

export default App;
