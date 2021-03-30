document.write("<script src='static/configuration/ManConfig.js'></script>")
document.write("<script src='static/js/formateDate.js'></script>")

// 志愿者申请通过名单

$(function(){
    myJson = JSON.stringify({"status" : 1});

    $.ajax({
        url: MyPathConfig("queryAvFormByStatus"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                    var appTime = formatDate(res.data[i].av_application_time);
                    var passTime = formatDate(res.data[i].av_pass_time);

                    str += 
                    `
                    <tr>
                        
                        <td>${res.data[i].user_realname}</td>
                        <td>${res.data[i].user_age}</td>
                        <td>${res.data[i].user_sex}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>${appTime}</td>
                        <td>${passTime}</td>
                    </tr>
                    `
                  
                }
                
                $("#petPassMemTbody").append(str);
            }else if(res.code == 404){
                error404();
            }
        },
        error(error) {
            error500();
        }
    })

    
})
