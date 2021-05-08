const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatorio']
    },
    telefone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatorio']
    },
    senha: {
        type: String,
        default: null
    },
    foto: {
        type: String,
        required: [true, 'Foto é obrigatorio']
    },
    dataNascimento: {
        type: String,
        default: true,
    },
    sexo: {
        type: Date,
        enum: ['M', "F"],
        default: Date.now,
    },
    status: {
        type: String,
        default: true,
        enum: ['A', 'I'],
        default: 'A',
    },
    documento: {
        tipe: {
            type: String,
            enum: ['individual', 'corporation'],
            required: true,
        },
        numero: {
            type: String,
            required: true,
        },
    },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Cliente', cliente)