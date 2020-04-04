import Axios from "axios";



function errorHandler(e) {
    var msg = '';
    console.log(e);
    switch (e.code) {
        //   case FileError.QUOTA_EXCEEDED_ERR:
        //     msg = 'QUOTA_EXCEEDED_ERR';
        //     break;
        //   case FileError.NOT_FOUND_ERR:
        //     msg = 'NOT_FOUND_ERR';
        //     break;
        //   case FileError.SECURITY_ERR:
        //     msg = 'SECURITY_ERR';
        //     break;
        //   case FileError.INVALID_MODIFICATION_ERR:
        //     msg = 'INVALID_MODIFICATION_ERR';
        //     break;
        //   case FileError.INVALID_STATE_ERR:
        //     msg = 'INVALID_STATE_ERR';
        //     break;
        default:
            msg = 'Unknown Error';
            break;
    };

    console.log('Error: ' + msg);
}

function onInitFs(fs) {
    const url = this;
    const date = new Date();
    fs.root.getFile(date.getMilliseconds(), { create: true }, function (fileEntry) {

        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function (fileWriter) {

            fileWriter.onwriteend = function (e) {
                console.log('Write completed.');
            };

            fileWriter.onerror = function (e) {
                console.log( e);
                console.log('Write failed: ' + e.toString());
            };

            Axios.get(url,{
                responseType : 'blob'
            }).then(result => {
                console.log('result: ', result);
                // FileSaver.saveAs( result.data,"reserve.pdf");
                fileWriter.write(result.data);
                // var reader = new FileReader();
                // reader.onload = (e) => {
                //     console.log('e: ', e);

                //     var blob = new Blob(reader.result, { type: "application/pdf" });
                //     fileWriter.write(blob);
                // }
                // reader.readAsDataURL(result.data);

            })



        }, errorHandler);

    }, errorHandler);

}
export default function SaveFile(url) {


    window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024, onInitFs.bind(url));

}