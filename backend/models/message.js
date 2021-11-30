const { sequelizer } = require('json-sequelize');

const messageSchema = {
    title: 'Message Schema',
    unique: [''],
    required: [''],
    properties: {
      id: { type: 'integer' },
      name: { type: 'sting', maxLength: 255 },
      content: { type: 'string', maxLength: 255 },
      online: { type: 'integer' },
      type: { type: 'string', maxLength: 255 },
      slug: { type: 'string', maxLength: 255 },
      createdAt: { type: 'string', format: 'date-time' },
      modifiedAt: { type: 'string', format: 'date-time' }
    }
  }
  
  const messageModel = sequelizer(messageSchema)
  
  console.log(messageModel)