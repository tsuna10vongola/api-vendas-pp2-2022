import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {
    id: string
}

class ShowProductService {

    public async execute({id}: IRequest): Promise<Product> {
        let productRepository = getCustomRepository(ProductRepository)
        let product = await productRepository.findOne(id)
        if (!product) {
            throw new AppError('Produto não existe')
        }
        return product
    }
}

export default ShowProductService