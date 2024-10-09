const express = require('express');
const multer = require('multer');
const bookcontroller = require('../controllers/bookcontroller');
const router = express.Router();
router.use(express.urlencoded({ extended:false }))
const upload = multer({
    storage : multer.diskStorage({}),
});
router.get('/add/book',(req,res)=>{
    res.render('book.ejs')
})
router.post('/add/new/book', upload.single('bookImage'), (req,res)=>{
    bookcontroller.addBook(req, res)
})
router.get('/books', (req,res) =>{
    bookcontroller.getBooks(req, res)
})


module.exports = router;


//5//