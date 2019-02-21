const Post = require("../models/Post");

module.exports = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,

    holaMundo: (_, params) => {
      return "Hola desde GraphQL";
    }
  },

  Mutation: {
    crearUsuario: (_, { nombre, correo }) => {
      return `Nombre: ${nombre}, Correo: ${correo}`;
    },
    crearPost: (_, args) => {
      // Catch arguments
      const { texto, likes } = args;

      // Create new Post instance
      const newPost = new Post({
        texto: texto,
        likes: likes
      });

      return new Promise((resolve, reject) => {
        newPost.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
