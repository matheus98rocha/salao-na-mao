const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const colaborador = new Schema({
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
    contaBancaria: {
        titular: {
            type: String,
            required: true,
        },
        cpfCnpj: {
            type: String,
            required: true,
        },
        banco: {
            type: String,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },

        agencia: {
            type: String,
            required: true,
        },
        numero: {
            type: String,
            required: true,
        },
        dv: {
            type: String,
            required: true,
        },
    },
    recipienteId: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Colaborador', colaborador)