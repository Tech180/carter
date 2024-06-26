import * as mongoose from 'mongoose';
import {Account,Recipe} from './schema';

// connect to database
await mongoose.connect('mongodb://localhost:27017/carter');

// const user1 = new Account({
//     username: "TomRum",
//     password: "654321",
// });
// await user1.save()

const lasagna = new Recipe(
    {
        name: "Lasagna",
        ingredients: [
            {
                name: "Ground Beef",
                quantity: 1,
                unit: "lbs"
            },
            {
                name: "Barilla GF Lasagna Noodles",
                quantity: "1",
                unit: "package"
            }
        ],
        tags: "gluten-free"
    }
)
await lasagna.save()

// disconnect
await mongoose.disconnect();