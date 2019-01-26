let url = require('url');

let route = {
    index:(req,res)=>{
        res.render('index')
    },
    indexPjax:(req,res)=>{
        let id = url.parse(req.url,true).query;
        let tpl = 'pjax_id'+id.id;
        let isPjax = req.headers['x-pjax'];

        if(isPjax=='true'){
            res.renderPjax(tpl)
        }else{
            res.redirect('http://127.0.0.1:3000');
        }
    }
};

module.exports = route;