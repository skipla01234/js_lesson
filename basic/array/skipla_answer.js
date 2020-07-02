/**
 * 元になる担当ごとの売上
 */
let revenue = [
 ['西田', 10000],
 ['西田', 20000],
 ['寺西', 1500],
 ['寺西', 30000],
]

/**
 * 回答の担当ごとの売上が入るオブジェクトを定義しておく
 */
let result = {
  '西田' : 0,
  '寺西' : 0,
}

/**
 * forEachを使う方法
 **/
revenue.forEach((val, i) => {
  let name  = val[0]
  let price = val[1]
  result[name] += price
})

console.log(result)
