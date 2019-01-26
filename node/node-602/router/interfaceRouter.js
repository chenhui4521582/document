let connect = require('../connect/connect_sql');
let crypto = require('crypto');
let formidable=require('formidable');
let path = require('path');
let fs = require('fs');
let svgCaptcha = require('svg-captcha');



class interfaceRouter {
    constructor(){}
    now_time(){
        let date = new Date(),
            Y = date.getFullYear() + '-',
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
            D = date.getDate() + ' ',
            h = date.getHours() + ':',
            m = date.getMinutes() + ':',
            s = date.getSeconds();
        return Y+M+D+h+m+s
    };
    bind_mobile(req,res){
        let {mobile,code} = req.body;
        let {code_img,user_id,user_name} = req.session;
        let mobile_reg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/;
        if(!user_id||!user_name){
            res.json({'error':'1001','msg':'尚未登录'});
        }
        else if(!mobile&&!code){
            res.json({'error':'1002','msg':'参数错误'});
        }
        else if(!mobile_reg.test(mobile)){
            res.json({'error':'1003','msg':'手机号码不正确'});
        }
        else if(code_img != code){
            res.json({'error':'1004','msg':'验证码错误'});
        }else{
            let sql = 'UPDATE user SET user_mobile=? WHERE user_id=?',
                params = [mobile,user_id];
            connect.query(sql,params).then(obj=>{
                if(obj.data.affectedRows>0){
                    res.json({'error':'1000','msg':'绑定成功'});
                }
            }).catch(obj=>{

            })
        }

    };
    bind_alipay(req,res){
        let {user_idname,user_alipay} = req.body,
            {user_id,user_name} = req.session;
            if(!user_id||!user_name){
                res.json({'error':'1001','msg':'尚未登录'});
            }
            else if(!user_idname&&!user_alipay){
                res.json({'error':'1002','msg':'参数错误'});
            }else{
                let sql = 'UPDATE user SET user_idname=?,user_alipay=? WHERE user_id=?',
                    params = [user_idname,user_alipay,user_id];
                connect.query(sql,params).then(obj=>{
                    if(obj.data.affectedRows>0){
                        res.json({'error':'1000','msg':'绑定成功'});
                    }
                }).catch(obj=>{

                })
            }

    };
    bind_qq(req,res){};
    bind_idcard(req,res){};
    user(req,res){};
    index(req,res){
        const _data = {
            posters:[],
            recent:[],
            hot:[],
            new_servers:[],
            new_games:[]
        };
        // let hot = await connect.query('SELECT *from games WHERE game_type=1');

        connect.query('SELECT *from games WHERE game_type=1').then(obj=>{
            _data.hot = [..._data.hot,...obj.data];
            return connect.query('SELECT *from games WHERE game_type=2')
        }).then(obj=>{
            _data.new_games = [..._data.new_games,...obj.data];
            return connect.query('SELECT *from games WHERE game_type=3')
        }).then(obj=>{
            _data.new_servers = [..._data.new_servers,...obj.data];
            return connect.query('SELECT *from poster WHERE poster_id=1')
        }).then(obj=>{
            _data.posters = [..._data.posters,...obj.data];
            res.json({
                error:0,
                msg:'success',
                data:_data
            })
        }).catch(obj=>{
            res.json({
                error:1,
                msg:'error'
            })
        })
    };
    games(req,res){
        connect.query('select *from games').then(obj=>{
            res.json({
                error:0,
                data:obj.data
            })
        }).catch(obj=>{
            res.json({
                error:1,
                data:obj.data
            })
        })
    };
    cards(req,res){
        connect.query('select *from cards').then(obj=>{
            res.json({error:0,msg:'success',data:obj.data})
        })
    };
    login(req,res){
        const params = req.query,
            username = params.username||'',
            password = params.password||'';
        if(username&&password){
            connect.query('SELECT *FROM user WHERE user_name=?',[username]).then(obj=>{
                const len = obj.data.length;
                if(len == 0){
                    res.json({'error':2,msg:'账号不存在'})
                }else{
                    let md5 = crypto.createHash('md5');
                    let {salt,user_pwd,user_vip,user_avatar,user_id,user_name,point,user_mobile,user_qq,user_alipay,user_idname} = obj.data[0]
                    let result = md5.update(password+'&&'+salt).digest('hex');
                    if(user_pwd === result){
                        req.session.user_name = username;
                        req.session.user_id = user_id;
                        res.cookie('user',{maxAge:30*24*60*60*1000,path:'/', httpOnly: false, secure: false,value:username });
                        res.json({error:0,msg:'登录成 功',userinfo:{user_name,user_vip,user_avatar,user_id,point,user_mobile,user_qq,user_alipay,user_idname}})
                    }else{
                        res.json({error:'4','msg':'密码错误'})
                    }
                }
            })
        }else {
            res.json({'error':'3',msg:'账号,密码错误'})
        }
    };
    changeUser(req,res){
        const params = req.body,
            username = params.username;
        if(username){
            connect.query('SELECT *FROM user WHERE user_name=?',[username]).then(obj=>{
                const resultLength = obj.data.length;
                if(resultLength>0){
                    res.json({'error':0,msg:'当前账号可以注册'})
                }else{
                    res.json({'error':1,'msg':'当前账号已注册'})
                }
            })
        }
    };
    register(req,res){
        let data = req.query;
        let username = data.username;
        let password = data.password;
        let register = ()=>{
            if(password&&username){
                let Salt = ()=>{
                    let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
                    let len = arr.length;
                    let salt = '';
                    for(let i=0;i<5;i++){
                        let randomNum = Math.floor(Math.random()*len);
                        salt+=arr[randomNum]
                    }
                    return salt;
                };
                let createSalt = Salt();
                let cryptPwd = (pwd)=>{
                    let MD5 = crypto.createHash('md5');
                    let pwdSalt = pwd+'&&'+createSalt;
                    let result = MD5.update(pwdSalt).digest('hex');
                    return result;
                };
                let sql = 'INSERT INTO user(user_name,user_avatar,user_vip,salt,user_pwd) VALUES (?,?,?,?,?)';
                let parse = [username,1,1,createSalt,cryptPwd(password)];
                connect.query(sql,parse).then((obj)=>{
                    if(obj.data.affectedRows>0){
                        let sql = 'SELECT *FROM user WHERE user_name=?',
                            params = [username];
                        return connect.query(sql,params)
                    }
                }).then(obj=>{
                    let {user_vip,user_avatar,user_id,user_name,point,user_mobile,user_qq,user_alipay,user_idname} = obj.data[0]
                    req.session.user_name = user_name;
                    req.session.user_id = user_id;
                    res.cookie('user',{maxAge:30*24*60*60*1000,path:'/', httpOnly: false, secure: false,value:user_name});
                    res.json({error:'0',msg:'注册成功',userinfo:{user_name,user_vip,user_avatar,user_id,point,user_mobile,user_qq,user_alipay,user_idname}})
                })
            }else{
                res.json({'error':'1','msg':'注册失败，参数不正确！'})
            }
        };
        let checkUser = ()=>{
            let sql = "SELECT *FROM user WHERE user_name=?";
            let param = [username];
            connect.query(sql,param).then((obj)=>{
                let len = obj.data.length;
                if(len==0){
                    register()
                }else{
                    res.json({'error':'2','msg':'当前账号已经注册！'})
                }
            })
        };
        checkUser();
    };
    getUser(req,res){
        let user_id = req.session.user_id ? req.session.user_id : '';
        if(user_id){
            connect.query('SELECT *FROM user WHERE user_id=?',[user_id]).then(obj=>{
                const len = obj.data.length;
                if(len == 0){
                    res.json({'error':2,msg:'账号不存在'})
                }else{
                    let {user_id,user_avatar,user_vip,user_name,point,user_mobile,user_qq,user_alipay,user_idname} = obj.data[0];
                    res.json({
                        error:0,
                        userinfo:{
                            user_name,
                            user_vip,
                            user_avatar,
                            user_id,
                            point,
                            user_mobile,
                            user_qq,
                            user_alipay,
                            user_idname
                        }
                    })
                }
            })
        }else{
            res.json({error:1,'msg':'尚未登录'})
        }

    };
    gameDetail(req,res){
        const {gameid} = req.query,
            game_detail = {
                game_id:'',
                game_name:'',
                game_used:'',
                game_introduction:'',
                game_posters:[],
                game_icon:'',
                game_intro:''
            },
            sql = 'SELECT *FROM games WHERE game_id=?',
            params = [gameid];
        connect.query(sql,params).then(obj=>{
            game_detail.game_id = obj.data[0].game_id;
            game_detail.game_name = obj.data[0].game_name;
            game_detail.game_used = obj.data[0].game_used;
            game_detail.game_introduction = obj.data[0].game_introduction;
            game_detail.game_icon = obj.data[0].game_icon;
            game_detail.game_intro = obj.data[0].game_intro;
            const sql = 'SELECT *FROM poster WHERE poster_id=?',
                params = [obj.data[0].game_poster];
            return connect.query(sql,params)
        }).then(obj=>{
            for(let i=0;i<obj.data.length;i++){
                game_detail.game_posters.push(obj.data[i].poster_src)
            }
            res.json({
                error:0,
                data:game_detail
            })

        });

    };
    logout(req,res){
        delete req.session.user;
        res.json({error:0,msg:'退出成功'})
    };
    lqCard(req,res){
        let {card_id} = req.query,
            {user_id,user_name} = req.session;
        if(!card_id){
            res.json({'error':'1002','msg':'参数错误'});
        }else{
            if(user_id||user_name){
                let sql = 'SELECT * FROM card_msg WHERE card_id=? and type=0',
                    params =[card_id];
                connect.query(sql,params).then(obj=>{
                    if(obj.data.length>0){
                        const {msg_id,card_msg} = obj.data[0],
                            sql = 'UPDATE card_msg SET type=? WHERE msg_id=?',
                            params = [1,msg_id];
                        connect.query(sql,params).then(obj=>{});
                        res.json({'error':'1000',msg:card_msg,msg_id:msg_id})
                    }else {
                        res.json({'error':'1002',msg:'当前礼包数量不足'})
                    }
                }).catch(res=>{
                    console.log(res);
                })
            }else{
                res.json({'error':'1001','msg':'您当前没有登录'});
            }
        }
    };
    modifyPwd(req,res){
        const {oldPwd,newPwd} = req.body,
            user = req.session.user,
            sql = 'SELECT *FROM user WHERE user_name=?',
            params = [user];
            connect.query(sql,params).then(obj=>{
                const len = obj.data.length;
                if(len == 0){
                    res.json({'error':2,msg:'账号不存在'})
                }else{
                    let md5 = crypto.createHash('md5');
                    let obj_salt = obj.data[0].salt;
                    let obj_pwd = obj.data[0].user_pwd;
                    let result = md5.update(oldPwd+'&&'+obj_salt).digest('hex');
                    if(obj_pwd === result){
                        newHashPwd = md5.update(newPwd+'&&'+obj_salt).digest('hex');
                        const sql = 'UPDATE user SET user_pwd=? WHERE username =?',
                            newHashPwd = md5.update(newPwd+'&&'+obj_salt).digest('hex'),
                            params = [sql,user];
                        return connect(sql,params)
                    }else{
                        res.json({error:'4','msg':'密码错误'})
                    }
                }
            }).then(obj=>{
                console.log(obj)
            })

    };
    poster(req,res){
        let {poster_id} = req.query,
            sql = 'SELECT *from poster WHERE poster_id = ?',
            params = [poster_id];
        connect.query(sql,params).then(obj=>{
            let len = obj.data.length;
            if(len>0){
                res.json({'error':'1000',data:obj.data})
            }else{
                res.json({'error':'1001','msg':'没有数据'})
            }
        })
    };
    store(req,res){
        let sql = 'SELECT *FROM store ORDER BY commodity_id';
        connect.query(sql).then(obj=>{
            let store = {hot:[],lb:[],sw:[],xn:[]},
                {data} = obj;
            for(let i=0;i<data.length;i++){
                if(data[i].commodity_type == 1){
                    store.lb.push(data[i])
                }
                else if(data[i].commodity_type == 2){
                    store.sw.push(data[i])
                }
                else if(data[i].commodity_type == 3){
                    store.xn.push(data[i])
                }else{
                    store.hot.push(data[i])
                }
            }
            res.json({'error':'1000',data:store})
        }).catch(res=>{})
    };
    articles(req,res){
        let sql = 'SELECT a.*,b.`user_id`,b.`user_vip`,b.`user_avatar`,b.`user_name` FROM articles a LEFT JOIN USER b ON a.user_id=b.user_id ORDER BY articles_id DESC LIMIT 0,20';
        connect.query(sql).then(obj=>{
            let {data} = obj;
            if(data){
                for(let i=0;i<data.length;i++){
                    if(data[i].articles_img){
                        data[i].articles_img = data[i].articles_img.split(',');
                    }
                }
                res.json({error:'1000',data:data})
            }else{
                res.json({error:'1001',msg:'没有数据',data:[]})
            }
        })
    };
    publish_articles(req,res) {
        let uploadDir='./static/images/upload';
        let form=new formidable.IncomingForm();
        //文件的编码格式
        form.encoding='utf-8';
        //文件的上传路径
        form.uploadDir=uploadDir;
        //文件的后缀名
        form.extensions=true;
        //文件的大小限制
        form.maxFieldsSize = 2 * 1024 * 1024;

        form.parse(req,(err, fields, files)=>{
            let pathArr = [];
            let host = 'http://vue.602.com/static/images/upload/';
            let {user_id,user_name} = req.session,
            {text} = fields;
            if(!user_name||!user_id){
                res.json({'error':'1001','msg':'您当前没有登录'})
            }else if(!text && !newPath){
                res.json({'error':'1002','msg':'参数错误'})
            }else{
                for(let i in files){
                    let oldpath = files[i].path;
                    let newPath = files[i].path+'_'+files[i].name;
                    pathArr.push(host+newPath.split('/')[3]);
                    console.log(pathArr);
                    fs.rename(oldpath,newPath,err=>{
                        if(err){
                            console.log('失败')
                        }else{
                            console.log('成功')
                        }
                    })
                }
                let sql = 'INSERT INTO articles(user_id,articles_content,articles_img,time) VALUES (?,?,?,?)';
                let params = [user_id,text,pathArr.join(),this.now_time()];
                connect.query(sql,params).then(obj=>{
                    if(obj.data.affectedRows>0){
                        res.json({'error':1000,'msg':'发表成功'})
                    }
                })
            }
        });
    };
    send_reply(req,res){
        let {id,content} = req.body,
            {user_name,user_id} = req.session;
        if(!user_name||!user_id){
            res.json({'error':'1001','msg':'您当前没有登录'})
        }else if(!id && !content){
            res.json({'error':'1002','msg':'参数错误'})
        }else{
            let sql = 'SELECT *FROM user WHERE user_id=?',
                params = [user_id],
                userData;
            connect.query(sql,params).then(obj=>{
                userData = obj.data[0];
                let sql = 'INSERT INTO reply(user_id,articles_id,reply_content,reply_time) VALUES (?,?,?,?)',
                    insertParams = [user_id,id,content,this.now_time()];
                return connect.query(sql,insertParams)
            }).then(obj=>{
                if(obj.data.affectedRows>0){
                    res.json({'error':'1000','msg':'回复成功','data':{user_name,user_id,reply_content:content,'reply_time':this.now_time(),'user_vip':userData.user_vip,'user_avatar':userData.user_avatar}})
                }
            })
        }
    };
    reply_list(req,res){
        let {id} = req.query;
        if(!id){
            res.json({'error':'1002','msg':'参数错误'})
        }else{
            let sql = 'SELECT a.*,b.`user_id`,b.`user_vip`,b.`user_avatar`,b.`user_name` FROM reply a LEFT JOIN USER b ON a.user_id=b.user_id WHERE a.articles_id = ? ORDER BY a.reply_time ASC',
            params = [id];
            connect.query(sql,params).then(obj=>{
                res.json({'error':'1000',data:obj.data,'msg':'success'})
            })
        }

    };
    add_like(req,res) {
        let {articles_id} = req.body,
            {user_name,user_id} = req.session,
            sql = 'SELECT articles_like FROM articles WHERE articles_id = ' + articles_id,
            num = 0;
        if(!user_id || !user_name){
            res.json({'error':'1001','msg':'您当前没有登录'})
        }
        else if (!articles_id) {
            res.json({'error': '1002', 'msg': '参数错误'})
        } else {
            connect.query(sql).then(obj => {
                num = obj.data[0].articles_like+1;
                let sql = 'UPDATE articles SET articles_like = ? WHERE articles_id = ?',
                    params = [num,articles_id];
                return connect.query(sql,params)
            }).then(obj => {
                if (obj.data.affectedRows > 0) {
                    res.json({
                        'error': '1000',
                        'msg': '点赞成功',
                        'data': {
                            articles_like:num
                        }
                    });

                }
            })
        }
    };
    exchange_prize(req,res){
        let {commodity_id} = req.query,
            {user_name,user_id} = req.session,
            sql = 'UPDATE store SET commodity_number=commodity_number-1 WHERE commodity_id =?',
            params = [commodity_id];
        if(!user_name||!user_id){
            res.json({'error':'1001','msg':'尚未登录'});
        }
        if(!commodity_id){
            res.json({'error':'1002','msg':'参数错误'});
        }else{
            connect.query(sql,params).then(obj=>{
                if(obj.data.affectedRows>0){
                    let sql = 'UPDATE user a SET point = point-(SELECT commodity_need FROM store b WHERE b.commodity_id = ?) WHERE a.user_id=?',
                        params = [commodity_id,user_id];
                    return connect.query(sql,params)
                }
            }).then(obj=>{
                if(obj.data.affectedRows>0){
                    res.json({'error':'1000','msg':'兑换成功'})
                }
            }).catch(res=>{

            })
        }
    };
    code_img(req,res){
        var captcha = svgCaptcha.create();
        req.session.code_img = captcha.text.toLocaleLowerCase();
        res.type('svg');
        res.status(200).send(captcha.data);
    };
    account_safety(req,res){
        let {type} = req.body;
        if(!type){
            res.json({'error':'1002',msg:'参数错误'})
        }else{
            switch (type) {
                case 'bind_mobile':
                    this.bind_mobile(req,res);
                    break;
                case 'bind_alipay':
                    this.bind_alipay(req,res);
                    break;
                case 'bind_qq':
                    this.bind_qq(req,res);
                    break;
                case 'bind_idcard':
                    this.bind_idcard(req,res);
                    break;
            }
        }
    }
}
class Router extends interfaceRouter{
    constructor(props){
        super(props);
    }
    routerConfig(App){
        App.use('/interface/userInfo',this.user);

        App.use('/interface/index',this.index);

        App.use('/interface/games',this.games);

        App.use('/interface/cards',this.cards);

        App.use('/interface/login',this.login);

        App.use('/interface/register',this.register);

        App.use('/interface/getUser',this.getUser);

        App.use('/interface/logout',this.logout);

        App.use('/interface/lqCard',this.lqCard);

        App.use('/interface/modifyPwd',this.modifyPwd);

        App.use('/interface/gameDetail',this.gameDetail);

        App.use('/interface/poster',this.poster);

        App.use('/interface/store',this.store);

        App.use('/interface/articles',this.articles);

        App.use('/interface/publish_articles',this.publish_articles.bind(this));

        App.use('/interface/send_reply',this.send_reply.bind(this));

        App.use('/interface/reply_list',this.reply_list);

        App.use('/interface/add_like',this.add_like);

        App.use('/interface/exchange_prize',this.exchange_prize);

        App.use('/interface/code_img',this.code_img);

        App.use('/interface/account_safety',this.account_safety.bind(this));
    }
}

module.exports = new Router();