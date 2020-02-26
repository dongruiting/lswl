import React,{Component} from 'react'
import './about.css'

export default class about extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className='my_top'>
                    <div className='my_div'></div>
                    <div className='my_text'>
                        <p><span>我的</span></p>
                    </div>
                    <div className='clock'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=1c89ae911c1cdf84a532c852a2abebbb5ae737231dd5b998cf5adac5ae7d7f03' /></div>
                </div>
                <div className='denglu'>
                    <div className='touxiang'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=be3dd495ffa42ef69edc40dc0da06d03703f5be513ccc8665a2c4e14023a08d9' /></div>
                    <div className='WX_name'>
                        <div className='WX_div'></div>
                        <div className='WX_text'>
                            <p><span>调用QQ、微信昵称</span></p>
                        </div>
                    </div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>设置</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>反馈</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>帮助</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>关于</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>分享</div>
                </div>
            </div>
        )
    }
}