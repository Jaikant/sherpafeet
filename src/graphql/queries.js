import gql from 'graphql-tag';

export const getSherpafeetRatings = gql`query GetSherpafeetRatings($guideuid: String!, $commentid: Int!) {
  getSherpafeetRatings(guideuid: $guideuid, commentid: $commentid) {
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
}
`;
export const listSherpafeetRatings = gql`query ListSherpafeetRatings(
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
`;
