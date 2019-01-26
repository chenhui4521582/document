var http = require('http');

var cheerio = require('cheerio');

var url = 'http://www.imooc.com/learn/348';


function Trim(str,is_global)
{
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    if(is_global.toLowerCase()=="g")
    {
        result = result.replace(/\s/g,"");
    }
    return result;
}

function filter (d){
    var $ = cheerio.load(d);
    var box =$('.chapter');
    var newData = [];
    box.each(function(){
        var text = [];
        var _this = $(this);
        var tit = _this.find('h3 strong').text();
        _this.find('li').each(function(){
            var id = $(this).attr('data-media-id');
            var txt = $(this).find('.J-media-item').text();
            text.push({'id':id,txt:Trim(txt,'g')})
        });
        newData.push({'tit':Trim(tit,'g'),data:text});

    });



    for(var i=0;i<newData.length;i++){
        console.log(newData[i].tit+'\n');
        var data = newData[i].data;

        for(var b in data){
            console.log(data[b].id+'   '+data[b].txt+'\n')
        }
    }

}



http.get(url,function(res){
    var html='';
    res.on('data',function(data){
        html+=data
    });

    res.on('end',function(){
        filter(html);
    })
}).on('error',function(){
    console.log('读取链接错误,请重试!');
});