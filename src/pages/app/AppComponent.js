import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class AppComponent extends React.Component {
 render() {
   console.log("the props are ", this.props);
   return(
     <div>
        <h1> This data is fetched at runtime from Appsync API. </h1>
        <h3> The data is persisted to localStorage from apollo cache. </h3>
        {/* {this.props.data.users ? this.props.data.users.map(usr => <div key={usr.id}> id: {usr.id}, email: {usr.email } </div>) : <div> users are null?  </div>} */}
 
     </div>
   )
 }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PrismaComponent here)
export default graphql(gql`query ListSherpafeetRatings(
  $filter: TableSherpafeetRatingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSherpafeetRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      usr
      commentid
      guideuid
      rating
      averagerating
      totalraters
      destination
      comment
      date
      month
      year
      attractions {
        meadows
        snow
        wildlife
        villagestay
        localfestival
        forests
        camping
        waterbody
        rivercrossings
      }
    }
    nextToken
  }
}
`,{ 
 options: { fetchPolicy: 'cache-and-network', errorPolicy: 'ignore', },
})(AppComponent);


