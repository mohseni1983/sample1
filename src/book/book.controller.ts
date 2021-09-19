import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBookDto } from './book-create.dto';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}

    @Post()
    async createBook(@Body() createBookDto:CreateBookDto):Promise<Book>{
        return this.bookService.createBook(createBookDto)
    }

    @Get()
    getText(){
        return 'This is test'
    }
}
