// 基地页面中所有的基地信息展示

document.write("<script src='static/js/ajaxForJs/common/myConfig.js'></script>")


$(function (){
    $.ajax({
        url: MyPathConfig("queryBases"),
        type:"get",
        async:false,
        dataType:"json",  //注意，这里是json格式
        success(res) {
            if(res.code == 200){
               var str ="";
               for(var i = 0; i < res.data.length; i++){
                    if(i % 2 != 0){
                        str += 
                        `
                        <div class="row choose-main my-lg-4 my-3 oddNumber">
                            <div class="col-lg-6 galsses-grid-right mt-lg-4">
                                <img src="${res.data[i].b_icon}" alt="" class="img-fluid">
                            </div>
                            <div class="col-lg-6 galsses-grid-right mt-4">

                                <h4 class="post mt-3 base-name">${res.data[i].b_name}</h4>
                                <div class="line" data-blast="bgColor"></div>
                                <p class="mt-3 base-main">${res.data[i].b_intro} </p>
                                <div class="log-in mt-md-4 mt-3">
                                    <a href="base-particulars.html" class="btn text-uppercase" data-blast="bgColor" href="javascript:;" id="${res.data[i].base_id}">
                                        了解更多
                                    </a>
                                </div>

                            </div>
                        </div>

                        `
                    }else{
                        str += 
                        `
                        <div class="row choose-main mb-lg-4 evenNumber">
                            <div class="col-lg-6 col-lg-push-6 col-md-12 col-md-push-6 galsses-grid-right">
                                <img src="${res.data[i].b_icon}" alt="" class="img-fluid">
                            </div>
                            <div class="col-lg-6 col-lg-pull-6 col-md-12 col-md-pull-6 galsses-grid-right basee-introduce">
                                <h4 class="post mt-3 base-name">${res.data[i].b_name}</h4>
                                <div class="line" data-blast="bgColor"></div>
                                <p class="mt-3 base-main">${res.data[i].b_intro}</p>
                                <div class="log-in mt-md-4 mt-3">
                                    <a href="base-particulars.html" class="btn text-uppercase" data-blast="bgColor" href="javascript:;" id="${res.data[i].base_id}">
                                        了解更多</a>
                                </div>
                            </div>

                        </div>
                        `
                    }

               }
               $("#bases").append(str);
               
            }
        },
        error: function(){
            window.location.href = "../../../../common/html/rec/recError500.html"
        }
    })
    judgeIndex();
})

function judgeIndex(){
    $(".choose-main a").click(function(){
        var base_id = $(this).attr("id");
        // console.log(index);
        setCookie("base_id",base_id);
        $(".choose-main a").attr("href","base-particulars.html");
       
    })
}

function baseMessage(data){
    setCookie("base_message",data);
}