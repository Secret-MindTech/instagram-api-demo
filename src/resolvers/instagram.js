import { UserInputError } from 'apollo-server-express'
import axios from 'axios'
require('dotenv').config()

const getProfileData = async () => {
  let response

  try {
    response = await axios.get('https://graph.instagram.com/me', {
      params: {
        fields: 'id,username,media_count,account_type',
        access_token: process.env.ACCESS_TOKEN,
      },
      headers: {
        host: 'graph.instagram.com',
      },
    })
  } catch (error) {
    return new UserInputError(error)
  }

  response = response['data']
  return response
}

const getUserMediaData = async () => {
  let response

  try {
    response = await axios.get('https://graph.instagram.com/me/media', {
      params: {
        fields:
          'id,caption,media_url,media_type,permalink,thumbnail_url,timestamp,username',
        access_token: process.env.ACCESS_TOKEN,
      },
      headers: {
        host: 'graph.instagram.com',
      },
    })
  } catch (error) {
    return new UserInputError(error)
  }

  response = response['data']
  return response.data
}

const getSingleMediaData = async (media_id) => {
  let response

  try {
    response = await axios.get(`https://graph.instagram.com/${media_id}`, {
      params: {
        fields:
          'id,caption,media_url,media_type,permalink,thumbnail_url,timestamp,username',
        access_token: process.env.ACCESS_TOKEN,
      },
      headers: {
        host: 'graph.instagram.com',
      },
    })
  } catch (error) {
    return new UserInputError(error)
  }

  response = response['data']
  return response
}

const postFeed = async (payload) => {
  let response

  let data = JSON.stringify(payload.data)

  let config = {
    maxBodyLength: Infinity,
    url: `https://graph.instagram.com/17841459558707435/media?access_token=${process.env.ACCESS_TOKEN}`,
    data,
  }

  console.log(config)

  try {
    response = await axios.request(config)
  } catch (err) {
    return new UserInputError(err)
  }
  response = response['data'].data
  console.log({ response })

  return false
}

export { getProfileData, getUserMediaData, getSingleMediaData, postFeed }
