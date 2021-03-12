import Layout from '../../components/layout'
import Router from 'next/router'

const n = 10

export default function Page () {
  return (
    <Layout>
      <h1>Задание 8</h1>
      <p>
        Сколько тысяч в миллионе?
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer === 1000){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}