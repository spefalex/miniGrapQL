import Product from '../models/product';
import OkrUser from '../models/okrUser';
export const resolvers = {
    Query: {
        async allProducts() {
            return await Product.find();
        },

        async allUsers() {
            return await OkrUser.find();
        },
        async getProductById(root, {
            _id
        }) {
            return await Product.findById(_id);
        },
        async loginUser(root, {
            username,password
        }) {
           return await OkrUser.find({username:username,password:password});
          //return res.json({message:"ok"})
        },
    },
    Mutation: {
        async createProduct(root, {
            input
        }) {
            return await Product.create(input);
        },
        async createUser(root, {
            input
        }) {
            return await OkrUser.create(input);
        },

        async updateProduct(root, {
            _id,
            input
        }) {
            return await Product.findOneAndUpdate({
                _id
            }, input, {
                new: true
            })
        },

        async deleteProduct(root, {
            _id
        }) {
            return await Product.findOneAndRemove({
                _id
            });
        }
    }
};