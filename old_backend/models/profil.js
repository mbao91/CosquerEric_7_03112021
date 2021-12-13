const { sequelizer } = require('json-sequelize');

const profilSchema = {
    title: 'Profil Schema',
    unique: ['email'],
    required: ['firstname', 'lastname', 'eamil', 'role'],
    properties: {
      id: { type: 'integer' },
      active: { type: 'boolean' },
      firstname: { type: 'string', maxLength: 255 },
      lastname: { type: 'string', maxLength: 255 },
      email: { type: 'string', format: 'email', maxLength: 255 },
      role: { type: 'string', enum: ['admin', 'staff'], default: 'staff' },
      createdAt: { type: 'string', format: 'date-time' },
      modifiedAt: { type: 'string', format: 'date-time' }
    }
  }
  
  const model = sequelizer(profilSchema)
  
  console.log(model)