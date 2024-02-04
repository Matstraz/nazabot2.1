import { StyleSheet } from "aphrodite";
import { slideInDown, tada, pulse, slideInUp } from "react-animations";

const styles = StyleSheet.create({
  infiniteBounce: {
    animationName: slideInDown,
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
  },
  slideInDown: {
    animationName: slideInDown,
    animationDuration: "2.5s",
  },
  slideInUp: {
    animationName: slideInUp,
    animationDuration: "4.5s",
  },
  tada: {
    animationName: tada,
    animationDuration: "2.2s",
    animationIterationCount: "infinite",
  },
  pulse: {
    animationName: pulse,
    animationDuration: "1.2s",
    animationIterationCount: "infinite",
  },
});

export default styles;
