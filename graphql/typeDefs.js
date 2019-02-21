module.exports = `
  type Query {
    hello(name: String): String!
    holaMundo : String!
  }

  type Mutation {
    crearPost(texto: String, likes: Int): Post!
    crearUsuario(nombre: String, correo: String): Usuario!
  }

  type Post {
    texto: String,
    likes: Int
  }

  type Usuario {
    nombre: String,
    correo: String,
    edad: Int
  }
`;
