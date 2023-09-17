"use client"
import axios from "axios";
import {useRouter} from "next/navigation"

export default function Login() {
    const style_background = {
        width: '100%',
        height: '900px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black'
    }

    const style_wrapper = {
        width: "400px",
        height: "400px",
        // backgroundColor: "orange",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        border: "1px solid black"
    }

    const style_inputsWrapper = {
        marginTop: '60px',
        width: '250px',
        height: '80%',
        // backgroundColor: 'green',

        display: "flex",
        flexDirection: "column",
        justifyContent: 'evenly'
    }

    const style_input = {
        width: '100%',
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 18,

        marginBottom: '10px'
    }

    const router = useRouter();

    return (
        <>
            <div className="wrapper" style={style_background}>
                <div style={style_wrapper}>
                    <div style={style_inputsWrapper}>
                        <form onSubmit={(event)=>{
                            event.preventDefault()
                            const id = event.target.id.value
                            const password = event.target.password.value
                            const body = {id, password}

                            setTimeout(async()=>{
                                await axios.post('/api/v1/login', body)
                                    .then(res => {
                                        const data = res.data
                                        if(data.code === 200) {
                                            localStorage.setItem('id', data.result.id)
                                            localStorage.setItem('name', data.result.name)
                                            router.refresh()
                                            router.push('/')
                                        }else{
                                            alert(data.message)
                                        }
                                    })
                                    .catch(err=> {
                                        console.log("로그인 요청 에러",err)
                                    })

                            })

                        }}>
                            <div style={style_input}>아이디<input name={'id'} size={20} /></div>
                            <div style={style_input}>비밀번호<input name={'password'} type='password' size={20} /></div>
                            <button style={{width: '100%'}} type='submit'>로그인</button>
                        </form>
                        <button style={{width: '100%', marginTop: '10px'}} onClick={()=>{
                            console.log('회원가입')
                        }}>회원가입</button>
                    </div>
                </div>
            </div>
        </>
    )
}