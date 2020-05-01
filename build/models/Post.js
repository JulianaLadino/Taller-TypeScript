"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    url: { type: String, require: true, unique: true, lowercase: true },
    content: { type: String, require: true },
    image: String,
    createdAt: { type: Date, default: Date.now },
    oudatedAt: Date
});
exports.default = mongoose_1.model('Post', PostSchema);
