layui.use(['element', "layer"], function(){
  const element = layui.element;
  const layer = layui.layer
  const $ = layui.$

  //$submit = $(".layui-show button[type!=reset]")
  let $username = $(".layui-show input[name=username]")
  let $password = $(".layui-show input[name=password]")
  let $password2 = $(".layui-show input[name=confirmPWD]")
  
  /* $username.on("input", () => {
    let username = $username.val()
    if(val.length < 6)return
  }) */

  $username.on("blur", function(){
    const uTag = /^[\w\_]{5,10}$/
    const username = $username.val()
    if(uTag.test($(this).val()))return
    $(this).val("")
    layer.msg("用户名要包含5-10位数字、字母或者下划线")
  })

  $password.on("blur", function(){
    const pTag = /^[a-zA-Z0-9]{4,10}$/
    const password = $password.val()
    if(pTag.test($(this).val()))return
    $(this).val("")
    layer.msg("密码不能含有非法字符，长度在4-10之间")
  })

  $password2.on("blur", function(){
    const pwd = $password.val()
    if($(this).val() !== pwd){
      layer.msg("两次密码不一致")
      $(this).val("")
    }
  })
});