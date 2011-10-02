# Formulate

Convenience wrapper for the excellent formidable node library. Creates and returns a `new formidable.IncommingForm` for you, optionally specifying a maximum upload size (`maxSize`);

      module.exports = function (req, res, cb, maxSize, formidableOptions)

`maxSize` and `formidableOptions` are optional.

Your `cb` will be invoked as `cb(err, fields, files)`, as specified in `.parse` in the `formidable` documentation.