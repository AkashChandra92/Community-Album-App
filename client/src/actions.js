// import superagent from 'superagent'
import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'
export const JWT = 'JWT'

const baseUrl = 'http://localhost:4000'

function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

export const NEW_IMAGE = 'NEW_IMAGE'

function newImage (payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

export const createImage = data => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      const action = newImage(response.body)

      dispatch(action)
    })
    .catch(console.error)
}
 function jwt(payload){
   return {
     type: JWT,
     payload
   }
 }

export const login =( email, password) => dispatch =>{
  console.log('login action')
  request
    .post(`${baseUrl}/login` )
    .send({email, password})
    .set('accept', 'json')
    .end((err, res) => {if (res.body) {
      const action = jwt(res.body);
      return dispatch(action);
  } else {    
      console.log(err)
  }
    })
    // .catch(console.error)
}