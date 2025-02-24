import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryDto } from '../dto/category-dto';
import { Categories } from '../entities/categories';

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
    @Patch('update-category/:categoryId')
    updateCategory(@Param('categoryId') categoryId:number, @Body() data: Partial<Categories>){
        return this.categoryService.updateCategory(categoryId, data)
    }
    @Get('find-category-by-id/:categoryId')
    findCategoryById(@Param('categoryId') categoryId:number){
       return this.categoryService.findCategoryById(categoryId);
    }
}
