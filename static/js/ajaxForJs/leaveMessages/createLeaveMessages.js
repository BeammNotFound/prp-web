
// 基地详情中留言功能
document.write("<script src='static/js/ajaxForJs/common/myConfig.js'></script>")


$(function(){
    var user_data = getCookie("user_data");

    // 判断用户登陆的状态
    if(user_data == "" || user_data == undefined){
    $("#messageSubmit").attr("disabled", true).css("background","gray");
    $("textarea").attr("disabled", true);

    // window.location.href = "login-base.html"
    }else{
        $("#messageSubmit").attr("disabled", false).css("background","black");
        $("textarea").attr("disabled", false);
        $(".contactAt").css("display","none");
        $("#messageSubmit").click(function (){
            
            user_id = JSON.parse(user_data).user_id;
            var text = $("textarea").val();
            if(text == ""){
                sweetAlert({
                    title: "错误",
                    text: "请输入内容",
                    type: "error",
                    allowOutsideClick: true,
                    confirmButtonColor: "rgb(238,55,21)",
                    confirmButtonText :"确认",
                    timer :"3000"
                })
            }else{
                var myJson = JSON.stringify({"c_words" : text,"user_id" : user_id});
                
                $.ajax({
                    url: MyPathConfig("CreateContact"),type:"post",
                    contentType: "application/json;charset=utf-8",
                    data: myJson,
                    success(res){
                        if (res.code == 200) {
                            console.log(res);
                            alert("提交成功");
                        }
                    },
                    error: function (error) {
                        window.location.href = "../../../../common/html/rec/recError500.html"
                    }
                })
            }
            
        })
    
    }
})
    

function checkBase(){
    console.log(111);
    let res= getCookie("user_data");
    if(res){
    }
}