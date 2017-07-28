<template>
  <div class="mine">
     <div class="title_nav">
      <ul>
        <li class="nav-item active" data-idx="1">
            <a href="javascript:void(0);">账号登录</a>
        </li>
        <li class="nav-item" data-idx="2">
            <a href="javascript:void(0);">无密码快速登录</a>
        </li>
        </ul>
    <a class="fh_back" href="javascript:history.go(-1)"><img src="https://m.happigo.com/Public/home/images/ico_fh.png"></a>
</div>
  
  
 <div class="user_box" id="list-1" style="display: block;">
    <div class="user_bd">
        <div class="fl">
        	<img src="https://m.happigo.com/Public/home/images/mob.jpg">
        </div>
        <div class="fr" style="width:80%;"><input id="mobile" name="mobile" type="text" placeholder="请输入邮箱、会员名或手机号"></div>

    </div>

    <div class="user_bd">
        <div class="fl"><img src="https://m.happigo.com/Public/home/images/lock.jpg"></div>
        <div class="fr" style="padding-left: .3rem;"><input id="password" type="password" placeholder="请输入登录密码"><input id="mpassword" type="text" placeholder="请输入密码" style="display: none;"></div>
        <div class="mm_ico"></div> <!--添加“on”样式来改变密码框眼睛图标-->
    </div>

    <div class="user_dd">
        <div class="fl"><img src="https://m.happigo.com/Public/home/images/iocn-3.jpg"></div>
        <div class="fr" style="padding-left: .3rem;"><input id="verifyimgcode" name="" type="text" placeholder="请输入验证码"></div>
        <div class="mm_dco verifyimg" style="float:right;"><img src="https://m.happigo.com/Index/verifyCode" style="float:right;" title="点击刷新"></div>
    </div>

    <button class="dl_but" onclick="login(this)">登    录</button> <!--输入密码后 添加“dl”样式来改变按钮颜色-->


    <div class="user_bd" style="border-bottom:none; height:30px; margin-top:-5%; ">
        <a class="zc" href="javascript:toReg()">新用户注册</a>
        <a class="wj" href="/Setting/getPwd">忘记密码？</a>
    </div>
   

</div> 
   
  
  
 <div class="fg_line" style="margin-top: 10%"><img src="https://m.happigo.com/Public/home/images/ico_line.png"></div>
   
 <div class="other_us">
					<div class="oth_list" style="margin-left: 20%" onclick="toUrl('https://m.happigo.com/Public/home/images/ico_dl_qq.png')"><img src="https://m.happigo.com/Public/home/images/ico_dl_qq.png"><p>QQ登录</p></div>
					<div class="oth_list" style="margin-left: 0" onclick="toUrl('/QuickLogin/login/platform/sina')"><img src="https://m.happigo.com/Public/home/images/ico_dl_wb.png"><p>微博登录</p></div>
					<div class="oth_list" style="margin-left: 0" onclick="toUrl('/QuickLogin/login/platform/alipay')"><img src="https://m.happigo.com/Public/home/images/ico_dl_zfb.png"><p>支付宝登录</p></div>
</div>
   
   
     
 	<nav-tab></nav-tab>
  </div>
</template>

<script>
	import NavTab from './NavTab'
export default {
  name: 'mine',
  data () {
    return {
    
      }
   }
  }
</script>

<style scoped lang="scss">
	 .title_nav {
    background: rgb(255,255,255);
    width: 100%;
    height: 40px;
    overflow: hidden;
    border-bottom: 1px solid #e1e1e1;
    background: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #1e1e1e;
    position: relative;
    ul {
			    display: inline-block;
			    margin: 0;
			    padding: 0;
			    list-style: none;
			    height: 40px;
			    margin-left: 5%;
			}
    
    
    
}



.title_nav .fh_back {
					    display: block;
					    width: 30px;
					    height: 30px;
					    position: absolute;
					    left: 0;
					    top: 5px;
					    color: #303030;
					    
					    img {
						        width: 100%;
						        border: medium none;
								    margin: 0;
								    padding: 0;
								    vertical-align: top;
						}
					}
					
					
					.title_nav li {
						    float: left;
						    height: 40px;
						    box-sizing: border-box;
						    border-bottom: 3px solid #fff;
						    margin: 0 20px;
						    cursor: pointer;
						}
						
						 .title_nav li:hover {
								    color: #c31f3a;
								    border-bottom: 3px solid #c31f3a;
								}
								
								
								.title_nav li {
										    float: left;
										    height: 40px;
										    box-sizing: border-box;
										    border-bottom: 3px solid #fff;
										    margin: 0 20px;
										    cursor: pointer;
										}
										
										
										.title_nav a {
									    color: #303030;
									    color: #000;
									    text-decoration: none;
									    outline: none;
									}
									
									
									
									.title_nav li:hover a {
										    color: #c31f3a;
										}
										
							.user_box {
								    width: 100%;
								    overflow: hidden;
								    margin-top: 5%;
								    
								    
								       .user_bd {
										    width: 80%;
										    margin: 10px auto 0 auto;
										    height: 45px;
										    overflow: hidden;
										    border-bottom: 1px solid #e1e1e1;
										     
										}
										
										.user_bd .fl {
												    float: left;
												    margin-top: 5%;
												    border: medium none;
												    margin: 0;
												    padding: 0;
												    vertical-align: top
												}
													
													
												.user_bd .fl img {
																    width: 50%;
																}	
												
												.user_bd .fr {
													    width: 70%;
													    float: left;
													    height: 45px;
													    overflow: hidden;
													}
																			
										.user_bd .fr input {
											    width: 100%;
											    height: 20px;
											    line-height: 20px;
											    font-size: 14px;
											    margin-top: 10px;
											    font-family: "微软雅黑", Helvetica;
												    border: none;
												    background: none;
											}
										
										
										.user_bd {
											    width: 80%;
											    margin: 10px auto 0 auto;
											    height: 45px;
											    overflow: hidden;
											    border-bottom: 1px solid #e1e1e1;
											}
																					
										.user_bd .fl {
											    float: left;
											    margin-top: 5%;
											}
										
										.user_bd .fl img {
												    width: 50%;
												    border: medium none;
												    margin: 0;
												    padding: 0;
												    vertical-align: top;
												}
										
										
										
						
									.user_dd {
										    width: 80%;
										    margin: 10px auto 0 auto;
										    height: 45px;
										    overflow: hidden;
										    border-bottom: 1px solid #e1e1e1;
										}
										.user_dd .fl {
										    float: left;
										    margin-top: 5%;
										}
										.user_dd .fl img {
												    width: 50%;
												    border: medium none;
												    margin: 0;
												    padding: 0;
												    vertical-align: top;
												}
										
										.user_dd .fr {
										    width: 38%;
										    float: left;
										    height: 45px;
										    overflow: hidden;
										}
										
										.user_dd .fr input {
													    width: 100%;
													    height: 20px;
													    line-height: 20px;
													    font-size: 14px;
													    margin-top: 10px;
													    font-family: "微软雅黑", Helvetica;
													    border: none;
													    background: none;
													}
										
										
										
										
										.user_dd .mm_dco {
												    width: 6rem;
												    height: 2rem;
												    float: right;
												    margin-top: 2.5%;
												    background: url(https://m.happigo.com/Index/verifyCode) no-repeat scroll 0 0;
												    background-size: 100% 100%;
												        img {
																    border: medium none;
																    margin: 0;
																    padding: 0;
																    vertical-align: top;
																}
												}
										
										
										
										
										
										
										
										
										.dl_but {
												    border-radius: .3rem;
												    width: 80%;
												    margin: 20px 10%;
												    background: #94193f;
												    color: #a94765;
												    height: 35px;
												    text-align: center;
												    line-height: 35px;
												    font-size: 16px;
												}
										
								}			
										
								
								
						.user_bd {
							    width: 80%;
							    margin: 10px auto 0 auto;
							    height: 45px;
							    overflow: hidden;
							    border-bottom: 1px solid #e1e1e1;
							         .zc {
								    text-align: left;
								    line-height: 30px;
								    color: #bd315c;
								    display: block;
								    float: left;
								  
								    text-decoration: none;
								    outline: none;							    
								}
								.wj {
										    text-align: right;
										    line-height: 30px;
										    color: #bd315c;
										    display: block;
										    float: right;
										}


							}
								
					.fg_line {
						    width: 100%;
						    overflow: hidden;
						    margin: 5px 0;
						      img {
									    		width: 100%;
									        border: medium none;
										   		 margin: 0;
										    	padding: 0;
										    	vertical-align: top;
									}
						}			
						
					.other_us {
					    width: 100%;
					    overflow: hidden;
					}	
				
				
				
				.other_us .oth_list {
							    width: 20%;
							    overflow: hidden;
							    text-align: center;
							    float: left;
							    /* margin-left: 10%; */
							}		
					.other_us .oth_list img {
										        width: 50%;
										        border: medium none;
												    margin: 0;
												    padding: 0;
												    vertical-align: top;
										    
										    
										}	
																				
</style>
