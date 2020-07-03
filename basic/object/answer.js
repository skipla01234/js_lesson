let temperature = {
 "横浜"   : {"最低気温" : 24, "最高気温" : 28},
 "名古屋" : {"最低気温" : 28, "最高気温" : 31},
 "熊谷"   : {"最低気温" : 31, "最高気温" : 38},
}

// ["横浜", "名古屋", "熊谷"]という連想配列をループさせる
// cityには"横浜","名古屋","熊谷"が入った状態で3回ループする
Object.keys(temperature).forEach((city) => {
  // 最後に出力するテキスト
  let text = ""
  text = `${city}の`

  // ["最低気温", "最高気温"]という連想配列をループさせる
  // kindには"最低気温","最高気温"が入った状態で2回ループする
  Object.keys(temperature[city]).forEach((kind) => {
    text = text + `${kind}は${temperature[city][kind]}℃です。`
  })

  // 都市ごとの気温の情報を出力
  console.log(text)
})

/**
 * for in を使うケース
 */
for (let city in temperature) {
  let text = ""
  text = `${city}の`
  for (let kind in temperature[city]) {
    text = text + `${kind}は${temperature[city][kind]}℃です。`
  }

  // 都市ごとの気温の情報を出力
  console.log(text)
}

/**
 * for ofを使うケース
 */
for (let city of Object.keys(temperature)) {
  let text = ""
  text = `${city}の`
  for (let kind of Object.keys(temperature[city])) {
    text = text + `${kind}は${temperature[city][kind]}℃です。`
  }

  // 都市ごとの気温の情報を出力
  console.log(text)
}
