import React,{Component} from 'react'
import './courtesyS.css'

export default class courtesyS extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className='ceremony'>
                    <div className='cere_return'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=259381e1720889d4b1dafed9a00e735b661259df5ff7f0ba766934fe963c8a34' /></div>
                    <div className='cere_gift'>
                        <div path='/daicj' className='ceregiftl'><p><span>待参加</span></p></div>
                        <div path='/yicj' className='ceregiftr'><p><span>已参加</span></p></div>
                    </div>
                    <div className='cereadd'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=56fe59dbe371b1f9d38c8ce3231d8249085ef78b9aa2d949260e7bd4ff4b522c' /></div>
                </div>
                <div className='cere_type'>
                    <div className='ceretype'><p><span>类别</span></p></div>
                    <div className='ceretime'><p><span>时间</span></p></div>
                </div>
                <div id='cere'>
                    <div className='cere_receipt'>
                        <div className='cere_name'><span className='category_cere'>王欣搬家请客</span><span className='cereamount'>待参加</span></div>
                        <div className='cere_name'><span className='g_cere'>地点名称</span><span className='ceredate'>2016.8.21</span></div>
                    </div>
                </div>
            </div>
        )
    }
}