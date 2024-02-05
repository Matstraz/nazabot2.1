import { StyleSheet } from "aphrodite";
import {
  slideInDown,
  tada,
  pulse,
  slideInLeft,
  slideInRight,
} from "react-animations";

const styles = StyleSheet.create({
  infiniteBounce: {
    animationName: slideInDown,
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
  },
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: "3.5s",
  },
  slideInRight: {
    animationName: slideInRight,
    animationDuration: "3.5s",
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
