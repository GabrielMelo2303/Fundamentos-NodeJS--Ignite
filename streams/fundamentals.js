// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserções no banco de dados

// 10mb/s -> 10.000

// Readable Streams / Writable Streams

// No node toda porta de entrada e de saida automaticamente é uma Stream

// Stream -> 

// process.stdin // stdin stream de leitura
//     .pipe(process.stdout) // stdout stream de saida

import {Readable, Writable, Transform} from 'node:stream'

/**
 * Descrição sobre os parametros da função Read do Readable Stream
 * @function push() é um método que utilizamos para uma readable stream fornecer informações para quem estiver consumindo ela
 */

class OneTohundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++
        setTimeout(() => {
            if(i > 100){
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
    
                this.push(buf)
            }
        }, 1000)
    }
}

/**
 * Descrição sobre os parametros da função Write do Writable Stream
 * Toda stream de escrita tem um método obrigatorio chamado _write()
 * @param chunk Pedaço que foi lido pela stream de leitura, o valor que o this.push() esta enviando por exemplo, meu _read leu 10 linhas e  this.push() me enviou estas 10 linhas
 * @param encoding Como esta informação esta codificada
 * @param callback uma função que a stream de escrita precisa chamar quando terminar de fazer o que precisa fazer com aquela informação
 */

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }

    } 

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

new OneTohundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())

// Uma função de escrita ela não retorna NADA, ela PROCESSA o DADO
// A stream de transformação obrigatoriamente precisa ler dados de algum lugar e escrever dados de algum lugar, ela é utilizada no intermeio entre a comunicação entre 2 outras streams no caso desta aula, a Readable e Writable Stream.