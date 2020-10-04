import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Home
import Home from "./screens/Home/index.jsx";

// About
import About from "./screens/Company/About";
import Process from "./screens/Company/Process";
import Principles from "./screens/Company/Principles";

// Shop
import Shop from "./screens/Shop";
import ItemDetails from "./screens/Shop/ItemDetails";

// Events
import Events from "./screens/Events";

// Blog
import Blog from "./screens/Blog";
import FullPost from "./screens/Blog/FullPost";

// Contact
import Contacts from "./screens/Contacts";

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
        <Route path="/blog" component={Blog} />
        <Route path="/fullpost" component={FullPost} />

        {/* Contact */}
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
