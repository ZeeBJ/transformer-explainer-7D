# Transformer Explainer：文本生成模型的交互式学习工具

Transformer Explainer 是一个交互式可视化工具，旨在帮助任何人学习基于 Transformer 的模型（如 GPT）的工作原理。它可以在浏览器中直接运行一个实时的 GPT-2 模型，让您可以用自己的文本进行实验，并实时观察 Transformer 的内部组件和操作如何协同工作来预测下一个词元。在 http://poloclub.github.io/transformer-explainer 尝试 Transformer Explainer，并在 YouTube 上观看演示视频 https://youtu.be/TFUc41G2ikY。<br/><br/>
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![arxiv badge](https://img.shields.io/badge/arXiv-2408.04619-red)](https://arxiv.org/abs/2408.04619)

<a href="https://youtu.be/TFUc41G2ikY" target="_blank"><img width="100%" src='https://github.com/user-attachments/assets/0a4d8888-6555-4df5-bc71-77f1299115c3'></a>

## 在线演示
尝试 Transformer Explainer：http://poloclub.github.io/transformer-explainer

## 多语言支持
Transformer Explainer 支持中文和英文两种语言。您可以在界面顶部切换语言，所有内容（包括文章、说明和交互元素）都会自动切换为您选择的语言。

## 研究论文

[**Transformer Explainer: Interactive Learning of Text-Generative Models**](https://arxiv.org/abs/2408.04619)  
作者：Aeree Cho, Grace C. Kim, Alexander Karpekov, Alec Helbling, Zijie J. Wang, Seongmin Lee, Benjamin Hoover, Duen Horng Chau  
_IEEE VIS 2024 海报展示_

## 如何在本地运行

#### 前置要求

- Node.js v20 或更高版本
- NPM v10 或更高版本

#### 步骤

```bash
git clone https://github.com/poloclub/transformer-explainer.git
cd transformer-explainer
npm install
npm run dev
```

然后，在您的网络浏览器中访问 http://localhost:5173。

## 致谢

Transformer Explainer 由佐治亚理工学院的 <a href="https://aereeeee.github.io/" target="_blank">Aeree Cho</a>、<a href="https://www.linkedin.com/in/chaeyeonggracekim/" target="_blank">Grace C. Kim</a>、<a href="https://alexkarpekov.com/" target="_blank">Alexander Karpekov</a>、<a href="https://alechelbling.com/" target="_blank">Alec Helbling</a>、<a href="https://zijie.wang/" target="_blank">Jay Wang</a>、<a href="https://seongmin.xyz/" target="_blank">Seongmin Lee</a>、<a href="https://bhoov.com/" target="_blank">Benjamin Hoover</a> 和 <a href="https://poloclub.github.io/polochau/" target="_blank">Polo Chau</a> 创建。

## 引用

```bibTeX
@article{cho2024transformer,
  title = {Transformer Explainer: Interactive Learning of Text-Generative Models},
  shorttitle = {Transformer Explainer},
  author = {Cho, Aeree and Kim, Grace C. and Karpekov, Alexander and Helbling, Alec and Wang, Zijie J. and Lee, Seongmin and Hoover, Benjamin and Chau, Duen Horng},
  journal={IEEE VIS Poster},
  year={2024}
}
```

## 许可证

该软件在 [MIT 许可证](https://github.com/poloclub/transformer-explainer/blob/main/LICENSE) 下可用。

## 联系方式

如果您有任何问题，请随时 [提交问题](https://github.com/poloclub/transformer-explainer/issues/new/choose) 或联系 [Aeree Cho](https://aereeeee.github.io/) 或上面列出的任何贡献者。

## 更多 AI 解释器工具

- [**Diffusion Explainer**](https://poloclub.github.io/diffusion-explainer) - 学习 Stable Diffusion 如何将文本提示转换为图像
- [**CNN Explainer**](https://poloclub.github.io/cnn-explainer) - 可视化卷积神经网络的工作原理
- [**GAN Lab**](https://poloclub.github.io/ganlab) - 在浏览器中体验生成对抗网络

