# pure typescript package

只基于 typescript 的代码包模版

## 指南

// 初次发布版本
`npm run release --first-release`

// 添加版本信息和指定发布版本等级
`npm run release -m "Commit message" -r minor`
`// major: 1.0.0 -> 2.0.0, minor: 1.0.0 -> 1.1.0, patch : 1.0.0 -> 1.0.1`

// 确认发布，npm publish 发布到 npm
`git push --follow-tags origin master && npm publish`
