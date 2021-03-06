/*
 * 获取比较有价值的条目id
 * @Author: czy0729
 * @Date: 2020-01-15 10:17:38
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-10-08 18:09:50
 */
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const bangumiData = require('bangumi-data')
const cheerio = require('./utils/cheerio')
const utils = require('./utils/utils')

/**
 * 动画
 *  - bangumi-data的条目id
 *  - https://bgm.tv/anime/browser/airtime/2021?page=4
 *  - https://bgm.tv/anime/browser/airtime/2020?page=25
 *  - https://bgm.tv/anime/browser?sort=rank&page=249
 *
 * 书籍
 *  - https://bgm.tv/book/browser?sort=rank&page=163
 *
 * 音乐
 *  - https://bgm.tv/music/browser?sort=rank&page=168
 *
 * 游戏
 *  - https://bgm.tv/game/browser?sort=rank&page=209
 *
 * 三次元
 *  - https://bgm.tv/real/browser?sort=rank&page=86
 */
const pages = {
  2021: 4,
  2020: 25,
  anime: 249,
  book: 163,
  music: 168,
  game: 209,
  real: 86,
}

;(async () => {
  let filePath
  let data = []

  // /**
  //  * anime 2021
  //  */
  // for (let page = 1; page <= pages[2021]; page++) {
  //   console.log(
  //     `- fetching ${`https://bgm.tv/anime/browser/airtime/2021?page=${page}`}`
  //   )
  //   const { data: indexHTML } = await axios({
  //     url: `https://bgm.tv/anime/browser/airtime/2021?page=${page}`,
  //   })
  //   data.push(...cheerio.cheerioIds(indexHTML))
  // }
  // write('./ids/anime-2021.json', data)
  // data = []

  // /**
  //  * anime 2020
  //  */
  // for (let page = 1; page <= pages[2020]; page++) {
  //   console.log(
  //     `- fetching ${`https://bgm.tv/anime/browser/airtime/2020?page=${page}`}`
  //   )
  //   const { data: indexHTML } = await axios({
  //     url: `https://bgm.tv/anime/browser/airtime/2020?page=${page}`,
  //   })
  //   data.push(...cheerio.cheerioIds(indexHTML))
  // }
  // write('./ids/anime-2020.json', data)
  // data = []

  // /**
  //  * bangumi-data
  //  */
  // bangumiData.items.forEach((item) => {
  //   const find = item.sites.find((i) => i.site === 'bangumi')
  //   if (find) {
  //     data.push(parseInt(find.id))
  //   }
  // })
  // write('./ids/anime-bangumi-data.json', data)
  // data = []

  // /**
  //  * anime rank
  //  */
  // for (let page = 1; page <= pages.anime; page++) {
  //   const url = `https://bgm.tv/anime/browser?sort=rank&page=${page}`
  //   const { data: indexHTML } = await axios({
  //     url,
  //   })

  //   console.log(`- fetching ${url}`)
  //   data.push(...cheerio.cheerioIds(indexHTML))
  // }
  // write('./ids/anime-rank.json', data)
  // data = []

  // /**
  //  * book rank
  //  */
  // for (let page = 1; page <= pages.book; page++) {
  //   const url = `https://bgm.tv/book/browser?sort=rank&page=${page}`
  //   const { data: indexHTML } = await axios({
  //     url,
  //   })

  //   console.log(`- fetching ${url}`)
  //   data.push(...cheerio.cheerioIds(indexHTML))
  // }
  // write('./ids/book-rank.json', data)
  // data = []

  // /**
  //  * music rank
  //  */
  // for (let page = 1; page <= pages.music; page++) {
  //   const url = `https://bgm.tv/music/browser?sort=rank&page=${page}`
  //   const { data: indexHTML } = await axios({
  //     url,
  //   })

  //   console.log(`- fetching ${url}`)
  //   data.push(...cheerio.cheerioIds(indexHTML))
  // }
  // write('./ids/music-rank.json', data)
  // data = []

  /**
   * game rank
   */
  // for (let page = 1; page <= pages.game; page++) {
  //   const url = `https://bgm.tv/game/browser?sort=rank&page=${page}`
  //   const { data: indexHTML } = await axios({
  //     url,
  //   })

  //   console.log(`- fetching ${url}`)
  //   data.push(...cheerio.cheerioIds(indexHTML))
  // }
  // write('./ids/game-rank.json', data)
  // data = []

  /**
   * real rank page 1-83
   */
  // for (let page = 1; page <= pages.real; page++) {
  //   const url = `https://bgm.tv/real/browser?sort=rank&page=${page}`
  //   const { data: indexHTML } = await axios({
  //     url,
  //   })

  //   console.log(`- fetching ${url}`)
  //   data.push(...cheerio.cheerioIds(indexHTML))
  // }
  // write('./ids/real-rank.json', data)
  // data = []

  /**
   * agefans
   */
  // data = Object.keys(
  //   JSON.parse(fs.readFileSync('../Bangumi-Static/data/agefans/data.json'))
  // ).map((id) => parseInt(id))
  // write('./ids/agefans.json', data)
  // data = []

  /**
   * wk8
   */
  // data = Object.keys(
  //   JSON.parse(fs.readFileSync('../Bangumi-Static/data/wenku8/data.json'))
  // ).map((id) => parseInt(id))
  // write('./ids/wk8.json', data)
  // data = []

  /**
   * wk8 系列的第一个单行本的id 用于获取开始日期 基于上一步数据
   */
  // Object.keys(
  //   JSON.parse(fs.readFileSync('../Bangumi-Static/data/wenku8/data.json'))
  // ).map((id) => {
  //   const filePath = `.//data/${Math.floor(
  //     id / 100
  //   )}/${id}.json`
  //   if (fs.existsSync(filePath)) {
  //     const subject = JSON.parse(fs.readFileSync(filePath))
  //     if (Array.isArray(subject.comic) && subject.comic[0] && subject.comic[0].id) {
  //       data.push(parseInt(subject.comic[0].id))
  //     }
  //   }
  // })
  // write('./ids/wk8-series.json', data)
  // data = []

  console.log('done')
})()

function write(filePath, data) {
  const dirPath = path.dirname(filePath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }

  console.log(`- writing ${filePath}`)
  fs.writeFileSync(
    filePath,
    JSON.stringify(Array.from(new Set(data)).sort((a, b) => a - b))
  )
}
