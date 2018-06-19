const users = {
  1: {
    userId: 1,
    name: 'jose',
    notification:{
      match: [],
      request: [{
        requesterId:2,
        posterId: 1,
        postBody: {
          postId:1,
          description: 'looking for somebody',
          category: 'cooking'
        }
      },
      {
        requesterId:3,
        posterId: 1,
        postBody: {
          postId:2,
          description: 'looking for somebody',
          category: 'cooking'
        }
      },
      {
        requesterId:4,
        posterId: 1,
        postBody: {
          postId:3,
          description: 'looking for somebody',
          category: 'cooking'
        }
      }],
      posts: []
    }
  },
  2: {
      userId: 2,
      name: 'maria',
      notification:{
        match: [],
        request: [],
        posts: []
      }
    },
    3: {
        userId: 3,
        name: 'carlos',
        notification:{
          match: [],
          request: [],
          posts: []
        }
      },
      4: {
          userId: 4,
          name: 'fernando',
          notification:{
            match: [],
            request: [],
            posts: []
          }
        }}



export default (state = users, action = {}) => {

  switch (action.type) {
  case 'NEW_USER':
    return [...state, action.payload]
  case 'MAKE_REQUEST':
    const pushRequest = JSON.parse(JSON.stringify(state))
    pushRequest[action.payload.posterId].notification.request.push(action.payload)
    return pushRequest
  case 'MAKE_MATCH':
    const match = JSON.parse(JSON.stringify(state))
    match[action.payload.posterId].notification.request =  match[action.payload.posterId].notification.request
    .filter((reqItem)=>{ return (reqItem.postBody.postId !== action.payload.postBody.postId )})

    match[action.payload.posterId].notification.match.push( action.payload)
    return match
  case 'MAKE_POST':
    const Post = JSON.parse(JSON.stringify(state))
    Post[action.payload.posterId].notification.posts.push(action.payload)
    return Post
  default:
    return state
  }
}
