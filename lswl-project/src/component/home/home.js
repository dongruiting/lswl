import React,{Component} from 'react'
import './home.css'

export default class home extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className='home_top'>
                    <div className="historical">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u22.png?token=0956f360b8b039604743931deb648c20d729aa7463d6eb6785a44057ee1686a1"/>
                        <div className="profitloss">
                            <p><span>历史盈亏</span></p>
                            <p><span>2948.00</span></p>
                        </div>
                    </div>
                    <div className="t_month">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u27.png?token=85f3e0a7d1acfe3ad6c279585bd37bf0d08a1a19ff0a8ad17eb14866829a057e"/>
                        <div className="profitloss">
                            <p><span>本月盈亏</span></p>
                            <p><span>2948.00</span></p>
                        </div>
                    </div>
                    <div className="his_gifts">
                        <div className="his_div"></div>
                        <div className="his_text">
                            <p><span>历史收礼</span></p>
                            <p><span>5500.00</span></p>
                        </div>
                    </div>
                    <div className="his_gift">
                        <div className="his_div"></div>
                        <div className="his_text">
                            <p><span>历史送礼</span></p>
                            <p><span>2500.00</span></p>
                        </div>
                    </div>
                    <div className="june_gifts">
                        <div className="june_div"></div>
                        <div className="june_text">
                            <p><span>6月收礼</span></p>
                            <p><span>5500.00</span></p>
                        </div>
                    </div>
                    <div className="june_gift">
                        <div className="june_div"></div>
                        <div className="june_text">
                            <p><span>6月收礼</span></p>
                            <p><span>2500.00</span></p>
                        </div>
                    </div>
                    <div className="his_june">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u28.png?token=ba4263abffb632c2dad126d9476e115d6d456442793505dd7a84a19709be96f1" />
                    </div>
                    <div className="june_face">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u29.png?token=ccb002a23e77d2480dba178b530696bb224d9445c30a25da1a9b72a04a8b6091" />
                    </div>
                    <div className="smilingface">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u30.svg?token=01d23ae9947c2eb8b5d522d5738848e1c228ad64de3a1a77467410ee39a95982" />
                    </div>
                </div>
                <div className='his_list'>
                    <ul className='ul1'>
                        <li>排行</li>
                        <li>用户</li>
                        <li>历史盈亏</li>
                        <li>本月盈亏</li>
                        <li>更多</li>
                    </ul>
                    <div className='list_content'>
                        <div className='list1'>
                            <div className='list1_div'></div>
                            <div className='list1_text'>
                                <li>1</li>
                                <li>JAMES 刘</li>
                                <li>95685.00</li>
                                <li>4500.00</li>
                                <li></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}