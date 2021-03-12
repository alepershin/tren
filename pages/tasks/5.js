import Layout from '../../components/layout'
import Router from 'next/router'

const n = 10

export default function Page () {
  return (
    <Layout>
      <h1>Задание 5</h1>
      <p>
        Приведите пример натурального двузначного числа, кратного 11, сумма цифр которого кратна 3, но не кратна 9.
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer === 33 || answer === 66){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}