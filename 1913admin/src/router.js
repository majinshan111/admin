import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
// import CustomNav from './component/customNav'
// import Login from './component/login/load'
const Login = ComponentImport(()=>import('./component/login'))
const Admin = ComponentImport(()=>import('./component/admin'))
const Home = ComponentImport(()=>import('./component/home'))
const UsersMsg = ComponentImport(()=>import('./component/users/change/changeMsg'))
const UsersPas = ComponentImport(()=>import('./component/users/change/changePas'))
const GoodsAdd = ComponentImport(()=>import('./component/goods/goodsadd'))
const GoodsList = ComponentImport(()=>import('./component/goods/goodslist'))
const GoodsHouse = ComponentImport(()=>import('./component/goods/goodshouse'))
const CategoryFirst = ComponentImport(()=>import('./component/category/categoryFirst'))
const CategorySecond = ComponentImport(()=>import('./component/category/categorySecond'))
const OrderDispath = ComponentImport(()=>import('./component/orders/orderDispath'))
const OrderRefund = ComponentImport(()=>import('./component/orders/orderRefund'))
const Orders = ComponentImport(()=>import('./component/orders/orders'))
const Advs = ComponentImport(()=>import('./component/advs'))

class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
            {/* 路由导航 */}
            
            {/* 路由渲染 */}
            <Switch>
                <Redirect exact from='/' to='/login'/>
                <Route path='/login' component={Login}/>
                <Route path='/admin' render={()=>{
                    return(
                        <Admin>
                            {/* <CustomNav></CustomNav> */}
                            <Redirect exact from='/admin' to='/admin/home'/>
                            <Route path='/admin/home' component={Home}/>
                            <Route path='/admin/usermsg' component={UsersMsg}/>
                            <Route path='/admin/userpas' component={UsersPas}/>
                            <Route path='/admin/goodsadd' component={GoodsAdd}/>
                            <Route path='/admin/goodslist' component={GoodsList}/>
                            <Route path='/admin/goodshouse' component={GoodsHouse}/>
                            <Route path='/admin/categoryfirst' component={CategoryFirst}/>
                            <Route path='/admin/categorysecond' component={CategorySecond}/>
                            <Route path='/admin/orderdispath' component={OrderDispath}/>
                            <Route path='/admin/orderrefund' component={OrderRefund}/>
                            <Route path='/admin/orders' component={Orders}/>
                            <Route path='/admin/advs' component={Advs}/>
                        </Admin>
                    )
                }}/>
            </Switch>
        </HashRouter>
        )
       
    }
}
export default RootRouter