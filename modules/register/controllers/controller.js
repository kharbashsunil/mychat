const path       = require('path');
const helper_lib = require('require-all')(path.resolve('./lib/helper_lib'));
mysqlConnection  = helper_lib.mysqlConnection;

exports.register =(req,res)=>{
  console.log('ksdfjkl',req.body);
}


