const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
    name: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    borrowedBy: [{ type: Schema.Types.ObjectId, ref: "users" }],
    priceHistory: { type: Array, required: true, default: [] },
    quantityHistory: { type: Array, required: true, default: [] },
    suggestions: [{
        text: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "users" },
        date: { type: Date, default: Date.now }
    }]
});

const BookModel = model("books", bookSchema);

module.exports = { BookModel };
