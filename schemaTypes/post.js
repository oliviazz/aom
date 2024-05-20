// schemas/pet.js
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        name: 'titlestring',
        type: 'string',
        title: 'String'
      }



    ]
  }