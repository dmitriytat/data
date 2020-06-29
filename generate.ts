#!/usr/bin/env deno run --allow-write

import { writeJson } from 'https://deno.land/std/fs/write_json.ts';

const points = 100;
const colors = 15;

const data = [];

for (let i = 0; i < points; i++) {
    const point: { [key: string]: number } = { point: i };

    for (let j = 0; j < colors; j++) {
        point[String.fromCharCode(j + 65)] = i + j * 0.1 + Math.random();
    }

    data.push(point);
}

writeJson("./data.json", data, { spaces: 2 });
