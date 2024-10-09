const Book = require('../models/Book');
const cloudinary = require('cloudinary').v2
async function addBook(req,res) {
    try{

        cloudinary.config({
            cloud_name: 'df4xiejun',
            api_key: '865492327511467',
            api_secret: 'HteBUAM0n6e8U8JSUM0Y6R_WW4M'
        })
        const result = await cloudinary.uploader.upload(req.file.path)
        console.log(result);

        console.log(req.body);
        console.log("---------------------------");
        console.log(req.file);
        let book = new Book(req.body);  
        book.bookImage = result.secure_url
        await book.save();
        res.end("Book submitted successfully....")
    } catch(err){
        console.log(err)
    }
    
}

const getBooks = async function (req,res) {
    try{
      let books = await Book.find({})
      console.log(books);
      res.render('booklist.ejs',{
        books : books
      })
    } catch(err){
    console.log(err.message,'msg');
    }
}

module.exports = {
    addBook,
    getBooks
}