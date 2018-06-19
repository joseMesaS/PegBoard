// import users from './users'


export default (state = posts, action = {}) => {
  switch(action.type){
  case 'MAKE_POST':

    return {
      ...state,
    }

  default:
    return state
  }
}

const posts = {
    carpenter: {
      employer:[
        {
          posterId: 3,
          postBody: {
            postId:1,
            description: 'looking for somebody',
            category: 'carpenter'
          }
        }
      ],
      freelancer: []
    },
    designer: {
      employer:[],
      freelancer: [{
        posterId: 2,
        postBody: {
          postId:1,
          description: 'looking for somebody',
          category: 'designing'
        }
      }]
    },
    cook: {
      employer:[],
      freelancer: []
    },
    developer: {
      employer:[],
      freelancer: []
    }
  }
