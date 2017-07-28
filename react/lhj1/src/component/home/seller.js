import React, { Component } from 'react';
import "../static/css/lhj-seller.css";
import { Link,browserHistory } from "react-router";
import $ from "jquery";
import "../static/css/animate.css";
import  axios from "axios";
import {Icon} from "antd";
import data from "../static/json/seller.json";
import Loading from "../loading";
import Cart from "./cart";
import Touch from "touchjs";
import Place_order from "../place_order.js";
import Storage from "../model/storage";

class Seller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goods:[],
            active:0,
            arr:[],
            dom:"",
            num:0,
            money:0,
            seller:{add_time
                :
                "2017-7-6 13:31:05",
                address
                    :
                    "回龙观",
                description
                    :
                    "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商",
                img
                    :
                    "public/upload/5fxN8X2ahJtXtOzhQrpLSE7a.webp",
                old_price
                    :
                    "5,888",
                phone
                    :
                    "10008611",
                price
                    :
                    "14,5,55",
                status
                    :
                    "1",
                title
                    :
                    "粥品香坊（回龙观）",
                _id
                    :
                    "595dcbb6d209da1fe888b0ab"},
            dom1:0,
            id:1,
            collect:false

        }
        this.link=this.link.bind(this);
        this.active=this.active.bind(this);
        this.ajax=this.ajax.bind(this);
        this.add=this.add.bind(this);
        this.delete=this.delete.bind(this);
        this.buy=this.buy.bind(this);
        this.place=this.place.bind(this);
        this.loading=this.loading.bind(this);
        this.hasCollect=this.hasCollect.bind(this);
        this.collect=this.collect.bind(this);
        this.hascollect=this.hascollect.bind(this)
    }
    hascollect(){
        var _that=this
        var id=this.props.params.aid;
        var user=Storage.get("userinfo")[0].username;
        axios.get('http://localhost:8000/api/collect?id='+id+'&user='+user)
            .then(function(response){
                console.log(response.data.result);
                if(response.data.result==1){
                    _that.setState({
                        collect:true
                    })
                }else{
                    _that.setState({
                        collect:false
                    })
                }
            })
            .catch(function(error){

            })
    }
    collect(){
        var _that=this;
        var id=this.props.params.aid;
        var user=Storage.get("userinfo")[0].username;
       var date=new Date()
        date=date.toLocaleString();
        if(user!=undefined){

            if($(".menu-r").find(".anticon").hasClass("anticon-star-o")){
                axios.get('http://localhost:8000/api/addcollect?id='+id+'&user='+user+"&time="+date)
                    .then(function(response){
                        if(response.data.result==1){
                            _that.setState({
                                collect:true
                            })
                        }
                    })
                    .catch(function(error){

                    })
            }else{
                axios.get('http://localhost:8000/api/deletecollect?id='+id+'&user='+user)
                    .then(function(response){
                        if(response.data.result==1){
                            _that.setState({
                                collect:false
                            })
                        }
                    })
                    .catch(function(error){

                    })
            }

        }

    }
    hasCollect(){


    }
    place(){
        $(".place").addClass("none").removeClass("block");
        $(".block-place").addClass("block").removeClass("none")
    }
    buy(){

        $(".place").addClass("block").removeClass("none");
        $(".block-place").addClass("none").removeClass("block");


        // var _that=this
        // if($(".account").hasClass("account-active")){
        //     $(".account").click(function(){
        //         _that.setState({
        //             dom1:1
        //         })
        //     })
        // }
    }
    ajax(){
        var _that=this;
        axios.get('http://localhost:8000/api/index')
            .then(function (response) {
              var list=eval("("+response.data.data.reverse()[0].description+")")


              for (var i=0;i<list.goods.length;i++){
                    for(var j=0;j<list.goods[i].foods.length;j++){
                        list.goods[i].foods[j].count=0;

                    }
              }
                _that.setState({
                    goods:list.goods
                })

            })
            .catch(function (error) {
                console.log(error);
            });
        //店铺信
        var id=_that.props.params.aid;
        axios.get('http://localhost:8000/api/indexseller1?id='+id)
            .then(function(response){
                if(response.data.data[0]!=undefined){
                    _that.setState({
                        seller:response.data.data[0]
                    })
                }


            })
            .catch(function(error){

            })
    }
    //gundong
    delete(key){
        var num2=this.state.num
        if(num2>0){
            var num2=this.state.num-1
        }
        let index1=key[0];
        let index2=key[1];
        let cartNum=this.state.goods
        var money1=this.state.money;

        money1-=1*cartNum[index2].foods[index1].price;
        console.log(money1);
        if(cartNum[index2].foods[index1].count>0){
            var count1=cartNum[index2].foods[index1].count-1;
        }

        cartNum[index2].foods[index1].count=count1
        // console.log(cartNum[index2].foods[index1].count);
        // console.log(key);
        // console.log(this.state.goods[index2].foods[index1].count);
        this.setState({
            num:num2,
            goods:cartNum,
            money:money1
        })
        if(money1>0){
            $(".goods-footer").find("p").text("¥    "+money1);
        }else{
            $(".goods-footer").find("p").text("未选择商品");
            $(".goods-footer").find("p").removeClass("p-price")
        }

        if(this.state.goods[index2].foods[index1].count<=0){
            $("#list"+index2).find(".goods-content").eq(index1).find(".anticon-minus-circle-o").hide();
            $("#list"+index2).find(".goods-content").eq(index1).find(".cartNum").hide()

        }
        console.log(this.state.num);
        if(num2<=0){
            this.refs.goshop.innerText="￥20元  起送";
            this.refs.cart.className="account";
            $(".goods-cart").removeClass("goods-cart-active");
            $(".goods-cart-num").hide();

        }
        if(this.state.num<10){
            $(".goods-cart-num").removeClass("w12")
        }
    }
    add(key){
        var collect=Storage.get("userinfo");
        if(collect==null){
            browserHistory.push(`/user/login`);

        }
        $(".goods-cart").addClass("goods-cart-active animated bounceIn infinite");
        setTimeout(function(){
            $(".goods-cart").removeClass("animated bounceIn infinite")
        },300)
        if(this.state.num>9){
            $(".goods-cart-num").addClass("w12")
        }


        let num1=this.state.num+1;

        let index1=key[0];
        let index2=key[1];
        let cartNum=this.state.goods
         let count=cartNum[index2].foods[index1].count+1;
        cartNum[index2].foods[index1].count=count;
        var money=this.state.money;

        money+=1*cartNum[index2].foods[index1].price

        this.setState({
            num:num1,
            goods:cartNum,

        })
        if(this.state.goods[index2].foods[index1].count>0){
            this.setState({
                money:money
            })
            $(".goods-footer").find("p").text("¥    "+money);
            $(".goods-footer").find("p").addClass("p-price")
            $("#list"+index2).find(".goods-content").eq(index1).find(".anticon-minus-circle-o").show();
            $("#list"+index2).find(".goods-content").eq(index1).find(".cartNum").show()

        }
        if(this.state.num>=0){
            $(".goods-cart").addClass("goods-cart-active animated bounceIn infinite");
            this.refs.goshop.innerText="去结算";
            this.refs.cart.className="account account-active";
            $(".goods-cart-num").show();
        }


    }
    //list点击
    active(key){


        this.setState({
            active:key,

        })
        var list=$(".list-title");
        var hei=0;
      for(var i=0;i<key;i++){
            hei+=$("#list"+i).height()
      }

        $(".goods").animate({scrollTop:hei},800)
    }
    link(){
        var path=`/home`
        browserHistory.push(path)
    }
    componentWillMount(){
        this.setState({
            dom:<Loading/>
        })
        this.hasCollect()
        this.hascollect()

    }
    loading(){

        // $("body").css("overflow","hidden")
        // $(".sellers").css({
        //     "position": "fixed",
        // "top": 0,
        // "left": 0,
        //
        // })
        var top=$("body").height()-$(".sellers-header-warp").height()-$(".nav-tab").height()-$(".goods-footer").height()
        $(".sellers-content").height(top)
        // this.setState({
        //     goods:data.goods
        // });

        // var arr2=eval("("+this.state.arr.description+")")
        // this.setState({
        //     arr:arr2
        // })
        $(".cart-list").click(function(){

            $(".card-warp").toggleClass("block")

        })
        $(".shadow").click(function(){

            $(".card-warp").toggleClass("block")

        })
    }
    componentDidMount() {

        $(".place").addClass("none")
        this.loading()
        var id=this.props.params.aid;
        this.setState({
            id:id
        })

        // document.querySelector(".goods").addEventListener('touchmove',function(event){
        //     $(".goods").scroll(function(){
        //
        //         var list=$(".list-title");
        //         var hei=0;
        //         for(var i=0;i<list.length;i++){
        //             // console.log($("#list" + i).position().top);
        //             if($("#list"+i).position().top<=0){
        //                 console.log(i);
        //                 $(".list").eq(i).addClass("list-active").siblings().removeClass("list-active")
        //             }
        //         }
        //
        //     })
        // })
        // $(".goods").touchmove(function(){
        //
        // })

        this.ajax();
        // $(".account").find("span").text("去结算")
        setTimeout(function(){
            $(".Loading").hide()
        },1000)

    }


    render() {
        var collect=""
        console.log(this.state.collect);
        if(this.state.collect==false){

            collect=<Icon type="star-o" />
        }else{
            collect=<Icon type="star" />
        }

                return (

                    <div className='sellers'>
                        <div className="place">
                            <Place_order seller={this.state.seller} goods={this.state.goods} dom1={this.place} id={this.state.id} money={this.state.money} loading={this.loading} all={this.all} ajax={this.ajax} />
                        </div>
                       <div className="block-place">
                           {this.state.dom}
                           {/*<Loading ref="loading" />*/}
                           <div className="sellers-header-warp">
                               <div className="sellers-header">
                                   <div className="header-menu">

                                       <Link onClick={this.link} className='bk'>
                                           <div className="menu-l">
                                               <i className="iconfont">&#xe600;</i>
                                           </div>
                                       </Link>
                                       <div className="menu-r" onClick={this.collect}>
                                           <i className="iconfont cart" >&#xe63f;</i>

                                           {
                                               collect
                                           }
                                       </div>
                                   </div>
                                   <div className="header-content">
                                       <img src={"http://127.0.0.1:8000/"+this.state.seller.img.slice(6)} alt="" />
                                       <div className="header-content-title">
                                           <h1>{this.state.seller.title}</h1>
                                           <div className="time">
                                               <span>蜂鸟专送</span>
                                               <p>{this.state.seller.price.split(",")[2]}分钟送达</p><p>配送费¥{this.state.seller.price.split(",")[1]}</p>
                                           </div>
                                           <div className="notice">

                                               公告：<b>1-12点餐高峰时间段请提前下预定单{

                                           }</b>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="header-footer">
                                       <div className="header-footer-left">
                                           <span>赠</span>
                                           <p>新用户下单立减17.0元(不与其它活动同享)</p>
                                       </div>
                                       <div className="header-footer-right">
                                           2个活动
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="nav-tab">
                               <div className="nav-tab-left nav-active">
                                   <h2>商品</h2>

                               </div>
                               <div className="nav-tab-right">
                                   <h2>评价</h2>
                                   <span>({this.state.seller.old_price.split(",")[0]}分)</span>
                               </div>
                           </div>
                           <div className="sellers-content">
                               <div className="sub-nav clear">
                                   <ul>
                                       {

                                           this.state.goods.map((val,key)=>{


                                               if(val.name=="热销榜"){
                                                   return  <li key={key} className={this.state.active==key?"list-active":"list"} onClick={this.active.bind(this,key)}>

                                <span>
                                    <i className="iconfont">&#xe66f;</i>
                                    {val.name}
                                </span>
                                                   </li>
                                               }else{
                                                   return  <li key={key} onClick={this.active.bind(this,key)} className={this.state.active==key?"list-active":"list"}>

                                             <span>

                                                 {val.name}
                                </span>
                                                   </li>
                                               }

                                           })
                                       }


                                   </ul>
                               </div>
                               <div className="goods" >
                                   {
                                       this.state.goods.map((val,key2)=>{

                                           return <div id={"list"+key2}>
                                               <div className="list-title "  key={key2}>
                                                   <h3>{val.name}</h3>
                                                   <b>大家喜欢吃,才是真的好吃</b>
                                               </div>

                                               {

                                                   val.foods.map((value,key1)=>{

                                                       return  <div className="goods-content" >
                            <span className="goods-img" key={key1}>
                                <img src={value.image} alt="" />
                            </span>
                                                           <div className="goods-content-title">
                                                               <h4>{value.name}</h4>
                                                               <div className="goods-letter">
                                                                   {value.description}
                                                               </div>
                                                               <div className="eval">
                                                                   <p>月售{value.sellCount}份</p>
                                                                   <p>好评率{value.rating}%</p>
                                                               </div>

                                                               <div className="price">

                                                                   <strong>{value.price}</strong>
                                                                   <div className="add-cart">

                                                                       <Icon type="minus-circle-o" onClick={this.delete.bind(this,[key1,key2])} />
                                                                       <div className="cartNum" ref="goodsNum">{this.state.goods[key2].foods[key1].count}</div>
                                                                       <Icon type="plus-circle" onClick={this.add.bind(this,[key1,key2])}/>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   })
                                               }

                                           </div>

                                       })
                                   }

                                   {/*<div className="goods-content">*/}
                                   {/*<span className="goods-img">*/}
                                   {/*<img src="https://fuss10.elemecdn.com/6/54/d979bb1abc34ee262b88ca07537ecjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="" />*/}
                                   {/*</span>*/}
                                   {/*<div className="goods-content-title">*/}
                                   {/*<h4>10寸苏丹王黄金果肉榴莲比萨</h4>*/}
                                   {/*<div className="goods-letter">*/}
                                   {/*选用马来西亚准国宝级苏丹王D24黄金榴莲果肉制作，如奶油般丝滑口感，重塑你对榴莲的全新印象。*/}
                                   {/*</div>*/}
                                   {/*<div className="eval">*/}
                                   {/*<p>月售71份</p>*/}
                                   {/*<p>好评率100%</p>*/}
                                   {/*</div>*/}

                                   {/*<div className="price">*/}

                                   {/*<strong>98</strong>*/}
                                   {/*<div className="add-cart">*/}

                                   {/*<Icon type="minus-circle-o" />*/}
                                   {/*<div className="cartNum">0</div>*/}
                                   {/*<Icon type="plus-circle" />*/}
                                   {/*</div>*/}
                                   {/*</div>*/}
                                   {/*</div>*/}
                                   {/*/!*</div>*!/*/}

                               </div>
                           </div>
                           <Cart msg={this.state.goods} add={this.add} delete={this.delete}/>
                           <div className="goods-footer">
                               <span className="goods-cart-num" ref="cartNum">{this.state.num}</span>
                               <span className="goods-cart "></span>
                               <div className="cart-list" onClick={this.show}>
                                   <p ref="goodsPrice">未选购商品</p>
                                   <b>配送费{this.state.seller.price.split(",")[1]}元</b>
                               </div>
                               <div className="account" ref="cart" onClick={this.buy}>
                                   <a href="#">
                                       <span ref="goshop">￥{this.state.seller.price.split(",")[0]}元  起送</span>
                                   </a>
                               </div>
                           </div>
                       </div>
                    </div>
                )



    }
}
export default Seller