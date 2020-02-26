import React,{Component} from 'react'
import './courtesyZ.css'

export default class courtesyZ extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className='cour_head'>
                    <div className='return'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=259381e1720889d4b1dafed9a00e735b661259df5ff7f0ba766934fe963c8a34' /></div>
                    <div className='cour_gift'>
                        <div className='courgiftl'><p><span>收礼</span></p></div>
                        <div className='courgiftr'><p><span>送礼</span></p></div>
                    </div>
                    <div className='add'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=56fe59dbe371b1f9d38c8ce3231d8249085ef78b9aa2d949260e7bd4ff4b522c' /></div>
                </div>
                <div className='nav_type'>
                    <div className='type'><p><span>类型</span></p></div>
                    <div className='time'><p><span>时间</span></p></div>
                    <div className='money'><p><span>金额</span></p></div>
                </div>
                <div className='gift_receipt'>
                    <div className='gift_name'><span className='category_name'>类目名称</span><span className='amount'>15000.00</span></div>
                    <div className='gift_name'><span className='g_name'>姓名</span><span className='number'>10人送礼</span><span className='date'>2016.5.21</span></div>
                </div>
            </div>
        )
    }
}