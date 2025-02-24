import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryDto } from '../dto/category-dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post('create-category')
    createCategory(@Body() categoryDTO: CategoryDto){
        return this.categoryService.createCategory(categoryDTO);
    }

    @Get('get-all-categories')
    getAllCategories(){
        return this.categoryService.findAllCategories();
    }
    @Delete('delete-category/:categoryId')
    deleteCategory(@Param('categoryId') categoryId){
        return this.categoryService.deleteCategory(categoryId);
    }
}
