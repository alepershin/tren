import Layout from '../../components/layout'
import Router from 'next/router'

const n = 10

export default function Page () {
  let st = ""
  let sa = ""
  let sb = ""
  let sc = ""

  let t = Math.trunc(Math.random() * 9) + 1
  if (t == 0 || t > 4){
    st = "тысяч"
  }
  if (t == 1){
    st = "тысяча"
  }
  if (t >= 2 && t < 5){
    st = "тысячи"
  }

  let a = Math.trunc(Math.random() * 10)
  if (a == 0 || a > 4){
    sa = "сотен"
  }
  if (a == 1){
    sa = "сотня"
  }
  if (a >= 2 && a < 5){
    sa = "сотни"
  }
  let b = Math.trunc(Math.random() * 10)
  if (b == 0 || b > 4){
    sb = "десятков"
  }
  if (b == 1){
    sb = "десяток"
  }
  if (b >= 2 && b < 5){
    sb = "десятка"
  }
  let c = Math.trunc(Math.random() * 10)
  if (c == 0 || c > 4){
    sc = "единиц"
  }
  if (c == 1){
    sc = "единица"
  }
  if (c >= 2 && c < 5){
    sc = "единицы"
  }
  return (
    <Layout>
      <h1>Задание 7</h1>
      <p>
        Напишите число, в котором {t} {st} {c} {sc} {a} {sa} {b} {sb}.
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer === t * 1000 + a * 100 + b * 10 + c){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}