import http from'node:http'
// o prefixo node: na importação de um módulo serve para informar que este módulo é interno do Node.JS
// CommonJS => require
// ESModules => import/export

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end


const server = http.createServer((req, res) => {
    const { method, url } = req

    console.log(method, url)
    return res.end('Hello Gabriel')
})

server.listen(3333)