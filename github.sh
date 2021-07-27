#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm run build:docs

# 进入生成的构建文件夹
cd docs

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
git push -f https://github.com/zehuichan/element-components.git master:gh-pages

cd -
