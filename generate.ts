#!/usr/bin/env deno run --allow-write

import { writeJson } from 'https://deno.land/std/fs/write_json.ts';

const points = 100;
const colors = {
    Blue: "#356AFF",
        Red: "#E92828",
    Green: "#3BD973",
    Orange: "#FB8D3D",
    Pink: "#FF7DE3",
    Lilac: "#B554FF",
    Cyan: "#50F5ED",
    "Dark Blue": "#002FB4",
    "Light Blue": "#799CFF",
    Purple: "#604FE9",
    "Light Green": "#8CFFB4",
    Gray: "#494949",
    Brown: "#A55F2A",
    Black: "#000000",
}

const data = [];

for (let i = 0; i < points; i++) {
    const point = Object.keys(colors).reduce((p, name) => {
        return {
            ...p,
            [name]: Math.random() * 100
        }
    }, { point: i });

    data.push(point);
}

console.log(Object.keys(colors))

writeJson("./data.json", data, { spaces: 2 });
