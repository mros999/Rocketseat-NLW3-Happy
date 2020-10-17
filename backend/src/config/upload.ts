import multer from 'multer';
import path from 'path';
//yarn add @types/multer -D  // -> Para colocar como dependencia de desenvolvimento

export default{
    storage: multer.diskStorage({
        destination:path.join(__dirname,'..','..','uploads'),
        filename:(request, file, cb)=>{
            const fileName=`${Date.now()}-${file.originalname}`;

            cb(null,fileName);

        },

    })

};