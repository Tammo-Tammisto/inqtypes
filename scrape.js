import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync('cache')) {
    fs.mkdirSync('cache');
}


for (let i = 1224; i > 1214; i--) {

    let cacheName = `cache/${i}.html`;
    let data;
    if (!fs.existsSync(cacheName)) {
        await sleep(1000);
        let res = await axios.get(`https://www.dieselsweeties.com/ics/${i}/`);
        data = res.data;
        fs.writeFileSync(cacheName, data);
        console.log('LIVE REQUEST!!!!');
    } else {
        data = fs.readFileSync(cacheName);
    }
    //console.log(res.data);
    const $ = cheerio.load(data);
    let img = $('div#desktopcomic>img');
    console.log(img.attr('src'));
}