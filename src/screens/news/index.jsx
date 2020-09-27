import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import SkeletonComponent from "./SkeletonComponent";

// Styles
import styles from "./index.module.scss";

// Children
import Header from "../../components/Header";

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const News = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      client
        .getEntries()
        .then((response) => setEntries(response.items))
        .catch(console.error);
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const posts = [];

  // Filter blog entries
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "blogPost" ? posts.push(entry) : null
  );

  return (
    <div className={styles.container}>
      <Header title="Новости" />
      {loading && <SkeletonComponent />}
      {!loading && <Posts posts={posts} />}
    </div>
  );
};

export default News;
