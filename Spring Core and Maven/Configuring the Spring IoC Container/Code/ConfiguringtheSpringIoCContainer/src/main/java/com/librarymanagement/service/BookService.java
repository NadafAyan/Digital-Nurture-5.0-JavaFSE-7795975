package com.librarymanagement.service;

import com.librarymanagement.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService Created");
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void getBooks() {
        System.out.println();
        System.out.println("Getting Books");
        System.out.println("Books : "+bookRepository.getBooks());
    }
}
