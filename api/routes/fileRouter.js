const express = require('express')
const router = express.Router()
let multer = require('multer')
let upload = multer({ dest: 'file/' })

const fileController = require('../controllers/fileController')
const { memberOnly, sellerOnly } =  require ('../middlewares/auth')



router.post('/file', upload.single('file'),fileController.fileUpload)
router.delete('/file/:productId', fileController.fileDelete)
module.exports = router;
