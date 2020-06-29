#!/usr/bin/env deno run --allow-write

import { writeJson } from 'https://deno.land/std/fs/write_json.ts';

const points = 100;
const lines = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const data = [];

for (let i = 0; i < points; i++) {
    const point = lines.reduce((p, name) => {
        return {
            ...p,
            [name]: Math.random() * 100
        }
    }, { point: i });

    data.push(point);
}

writeJson("./data.json", data, { spaces: 2 });
