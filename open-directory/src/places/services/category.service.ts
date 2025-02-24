import { Injectable } from '@nestjs/common';
import { CategoryDto } from '../dto/category-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from '../entities/categories';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
    @InjectRepository(Categories) // 👈 Inyectamos el repositorio de Place
        private readonly categoryRepository: Repository<Categories>,
    ) {}
    async createCategory(category:CategoryDto){
        const newCategory = this.categoryRepository.create(category);
        return this.categoryRepository.save(newCategory);
    }

    async findAllCategories(){
        return this.categoryRepository.find();
    }

    async deleteCategory(categoryId:number){
        return this.categoryRepository.delete(categoryId);
    }

    async updateCategory(categoryId:number, newData: Partial<Categories>){
        return this.categoryRepository.update(categoryId, newData);
    }
    async findCategoryById(categoryId:number){
        return this.categoryRepository.findOne({ where: { id:categoryId } });
    }
}
