var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var State=new Schema({
    stid:{type:Number},
    stname:{type:String},
    status:{type:Number}
},
{
    collection:'State'
}
);
module.exports=mongoose.model('State',
           State);
