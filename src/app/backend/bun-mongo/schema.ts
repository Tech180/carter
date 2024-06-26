import * as mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        recipes: [mongoose.Types.ObjectId]
    }
)

const recipeSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        ingredients: [{
            name: String,
            quantity: Number,
            unit: String
        }],
        tags: [String],
        description: String
    }
)

export const Account = mongoose.model('Account', accountSchema)
export const Recipe = mongoose.model('Recipe', recipeSchema)
