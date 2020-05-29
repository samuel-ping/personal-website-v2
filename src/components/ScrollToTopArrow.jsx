import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FiArrowUpCircle as ArrowIcon } from "react-icons/fi";
import "./ScrollToTopArrow.css";

class ScrollToTopArrow extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentDidMount() {
    document.addEventListener("scroll", (e) => {
      this.toggleVisibility();
    });
  }

  toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <>
        <div
          onClick={this.scrollToTop}
          className={this.state.isVisible ? "show-arrow" : "hide-arrow"}
        >
          <IconContext.Provider value={{ className: "arrow-wrapper" }}>
            <ArrowIcon />
          </IconContext.Provider>
        </div>
      </>
    );
  }
}

export default ScrollToTopArrow;
