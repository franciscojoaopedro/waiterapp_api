import mongoose from 'mongoose';

const Connectar=()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017',)
        .then(()=>console.log('Conectado ao  mongodb'))
        .catch(()=>console.log('Error ao conectar ao mongodb'));
};

export {Connectar};
