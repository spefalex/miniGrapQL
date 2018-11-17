import Product from '../models/product';
export const resolvers = {
    Query: {
        async allProducts() {
            return await Product.find();
        },
        async getProductById(root, {
            _id
        }) {
            return await Product.findById(_id);
        },
    },
    Mutation: {
        async createProduct(root, {
            input
        }) {
            return await Product.create(input);
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