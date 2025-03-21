const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    product: {type:mongoose.Schema.Types.ObjectId}
},{
 timestamps:true,
 versionKey:false
});

module.exports = mongoose.model("Category", categorySchema);