let points = [
  ["西田", "数学", 20],
  ["西田", "国語", 98],
  ["寺西", "数学", 45],
  ["寺西", "国語", 60],
]

/**
 * forEachを使う方法
 */
points.forEach((val, i, a) => {
  console.log(i, val, a)
})

/**
 * for inを使う方法
 */
for (let i in points) {
  console.log(points[i])
}

/**
 * forを使う方法
 */
for (let i = 0; i < points.length; i++) {
  console.log(points[i])
}


/**
 * for of を使う方法
 */
for (let val of points) {
  console.log(val)
}

/**
 * for ofとArray.entriesを使う
 * 添字と値を一緒に使いたい場合
 */
for (let [i, val] of points.entries()) {
  console.log(i, val)
}
