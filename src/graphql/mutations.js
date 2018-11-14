import gql from 'graphql-tag';

export const createSherpafeetRatings = gql`mutation CreateSherpafeetRatings($input: CreateSherpafeetRatingsInput!) {
  createSherpafeetRatings(input: $input) {
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
export const updateSherpafeetRatings = gql`mutation UpdateSherpafeetRatings($input: UpdateSherpafeetRatingsInput!) {
  updateSherpafeetRatings(input: $input) {
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
export const deleteSherpafeetRatings = gql`mutation DeleteSherpafeetRatings($input: DeleteSherpafeetRatingsInput!) {
  deleteSherpafeetRatings(input: $input) {
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
