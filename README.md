# MatrixLinkTech

广州矩联科技有限公司官方网站。

站点目标是清晰展示公司主体、真实项目、内容来源和合作入口。页面内容避免使用无法验证的指标、占位案例和 mock 文章；项目动态优先引导到 `2aran.com`、前端周刊、博主联盟等真实来源。

## 本地开发

```bash
npm install
npm run dev
```

## 验证

```bash
npm run lint
npm run build
```

## 内容维护

核心内容集中在 `src/data/site.ts`：

- 公司信息：`company`
- 项目入口：`projects`
- 动态来源：`updates`
- 合作方向：`cooperationTracks`

新增内容时优先补充真实 URL、清晰状态和可解释的来源，不在页面组件中散落硬编码数据。
