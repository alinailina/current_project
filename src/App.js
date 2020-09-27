import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Layout
import Home from "./screens/home/index.jsx";

// About
import About from "./screens/company/About";
import Process from "./screens/company/Process";
import Principles from "./screens/company/Principles";

// Shop
import Shop from "./screens/shop";
import ItemDetails from "./screens/shop/ItemDetails";

// Events
import Events from "./screens/events";

// Blog
import News from "./screens/news";
import FullPost from "./screens/news/FullPost";

// Contact
import Contact from "./screens/contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        {/* About */}
        <Route path="/about" component={About} />
        <Route path="/process" component={Process} />
        <Route path="/principles" component={Principles} />

        {/* Shop */}
        <Route path="/shop" component={Shop} />
        <Route path="/itemdetails" component={ItemDetails} />

        {/* Events */}
        <Route path="/events" component={Events} />

        {/* Blog */}
        <Route path="/news" component={News} />
        <Route path="/fullpost" component={FullPost} />
        {/* Contact */}
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
