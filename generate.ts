#!/usr/bin/env deno run --allow-write

import { writeJson } from 'https://deno.land/std/fs/write_json.ts';

const points = 100;
const colors = 15;

const data = [];

for (let i = 0; i < points; i++) {
    const point: { [key: string]: number } = { point: i };

    for (let j = 0; j < colors; j++) {
        point[String.fromCharCode(j + 65)] = 100 * Math.random();
    }

    data.push(point);
}

const a = [];
for (let j = 0; j < colors; j++) {
    a.push(String.fromCharCode(j + 65))
}

console.log(a.join(', '))
writeJson("./data.json", data, { spaces: 2 });
