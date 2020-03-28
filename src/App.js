import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import ShareButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPost } from "./actions";

import "./app.scss";

const tempArray = [
  {
    fName: "Daniel",
    lName: "Padrino",
    email: "testmail@gmail.com",
    age: 32,
    statusOnline: true
  }
];

function App({ posts, fetchPost }) {
  const fetch = () => {
    fetchPost();
  };

  return (
    <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render post!"
          tempArray={tempArray}
        />
        <ShareButton buttonText="Get Post" emitEvent={fetch} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              return <ListItem title={title} desc={body} key={index} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    posts: store.posts
  };
};

export default connect(mapStateToProps, { fetchPost })(App);
