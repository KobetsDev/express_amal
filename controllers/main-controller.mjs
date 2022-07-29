import mongoose from 'mongoose'
import { Product } from '../models/index.js'
// import axios from 'axios'
// import main from '../templates/main.'

class MainController {
    // http://localhost:8000/api/get_products
    async main(req, res, next) {
        const products = await Product.find()//Product.find()
        console.log(products)
        // return res.render('main', { 'products': products })
        return res.render('index', { 'products': products })
    }

}
export default new MainController()
// export default UserController
// export default class UserController
// exports.UserController = UserController