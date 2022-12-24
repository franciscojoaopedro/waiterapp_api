/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
import {model,Schema} from 'mongoose';

export const Category=model('Category',new Schema({
    name:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
}));

