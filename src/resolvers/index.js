import {
  getProfileData,
  getUserMediaData,
  getSingleMediaData,
  postFeed,
} from './instagram'

const Query = {
  Query: {
    getProfileData: () => getProfileData(),
    getUserMediaData: () => getUserMediaData(),
    getSingleMediaData: (_, { media_id }) => getSingleMediaData(media_id),
  },
}

const Mutation = {
  Mutation: {
    postFeed: (_, payload) => postFeed(payload),
  },
}

export { Query, Mutation }
