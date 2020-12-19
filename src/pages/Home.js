import React from "react";
import { Query } from "react-apollo";
import { LOGIN_QUERY } from "../lib/api/user";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <Query
      query={LOGIN_QUERY}
      variables={{
        username: "shogong",
        password: "tyrhddmltnghwk",
      }}
    >
      {({ data, loading }) =>
        loading ? (
          <p>불러오는중..</p>
        ) : (
          <div>
            {(function () {
              console.log(data);
              sessionStorage.setItem(
                "access_token",
                data.userCheck.access_token
              );
              return <Blog />;
            })()}
          </div>
        )
      }
    </Query>
  );
};

export default Home;
