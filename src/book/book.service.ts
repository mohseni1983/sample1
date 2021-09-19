import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './book-create.dto';
import { Book } from './book.entity';
import { BookRepositoy } from './book.repository';

@Injectable()
export class BookService {
    constructor(private bookRepository:BookRepositoy){}

    async createBook(createBookDto:CreateBookDto):Promise<Book>{
        const {name,writer,page}=createBookDto
        const book:Book=new Book()
        book.name=name
        book.writer=writer
        book.page=page
        await book.save()
        return book
    }
}
