import { gql } from 'apollo-server-express'

const ProfileData = gql`
  type ProfileData {
    account_type: String!
    id: String!
    media_count: Int!
    username: String!
  }
`

const MediaData = gql`
  scalar Date
  type MediaData {
    caption: String
    id: String
    media_type: String
    media_url: String
    permalink: String
    thumbnail_url: String
    timestamp: Date
    username: String
  }
`

const MediaDataInput = gql`
  input MediaDataInput {
    caption: String
    url: String
  }
`

const Query = gql`
  type Query {
    getProfileData: ProfileData
    getUserMediaData: [MediaData]
    getSingleMediaData(media_id: String!): MediaData
  }
`

const Mutation = gql`
  type Mutation {
    postFeed(data: MediaDataInput): Boolean
  }
`

export default [ProfileData, MediaData, MediaDataInput, Query, Mutation]
