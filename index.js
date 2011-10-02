var formidable = require("formidable");

module.exports = function (req, res, cb, maxSize, formidableOptions){
  if(maxSize && parseInt(req.headers['content-length'], 10) > (maxSize * 1024)){
    res.writeHead(403, {'content-type': 'text/plain'});
    res.end("File Too Large."); //unceremonial.
  }

  var form = new formidable.IncomingForm(formidableOptions);
  form.parse(req, cb);
  return form;
}