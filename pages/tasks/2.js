import Layout from '../../components/layout'
import Router from 'next/router'

const n = 10

export default function Page () {
  let a = Math.trunc(Math.random() * 9) + 1
  let sa = ""
  let sb = ""
  let sc = ""
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
      <h1>Задание 2</h1>
      <p>
        Напишите число, в котором {a} {sa} {b} {sb} {c} {sc}.
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer == a * 100 + b * 10 + c){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}