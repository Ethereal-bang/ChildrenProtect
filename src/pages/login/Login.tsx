import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import setToken from '../../utils/setToken'
import './Login.css'
export default function Login() {
  let [isRight, setIsRight] = useState<boolean>(true)
  let [username, setUsername] = useState<string>('')
  let [password, setPassword] = useState<string>('')
  let navigate = useNavigate()
  let Login = () => {
    // 登录逻辑
    if(password!=='admin'){
      setIsRight(false)
    }else{
      setIsRight(true)
      setToken(username)

      setTimeout(() => {
        navigate('/home')
      }, 0);
    }
  }

  return (
    <div className='login-outer'>
      <div className="loginBox">
        <div className="title">
          欢迎登录
        </div>
        <div className="mid">
          <div className="user">用户名称</div>
          <div className='input'>
            <input
              type="text"
              placeholder='输入用户名' 
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </div>
          <div className="pass">用户密码</div>
          <div className='password'>
            <input 
              type="password" 
              style={{ "borderColor": !isRight ? 'rgb(216, 26, 26)' : '',"color":!isRight?"rgb(216, 26, 26)":""}} 
              placeholder='密码' 
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="tips">
            {
              !isRight ?
                <div className="left">同户密码错误重新输入</div>
                : <div></div>
            }

            <div className="right">忘记密码？</div>
          </div>
        </div>

        <div className="loginBtn">
          <button onClick={Login}>登录</button>
        </div>
      </div>
    </div>
  )
}