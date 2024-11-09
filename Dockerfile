FROM oven/bun:1 AS base
WORKDIR /functional-oriented-design

COPY package.json /package.json
COPY bun.lockb /bun.lockb

RUN bun install

COPY . .

USER bun

EXPOSE 3000/tcp

