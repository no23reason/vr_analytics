# PoC - integrate analytics into VR/AR/MR

The [A-FRAME](https://aframe.io/) framework is utilized here.

The goal is to provide data visualizations, ideally in an interactive manner, meaning users can create new visualizations with a drag&drop-like experience.

[Here](https://www.youtube.com/watch?v=tpbDEQ6SNek&ab_channel=LarsJuhlJensen) is an example of data visualization, utilizing the A-FRAME framework.

The repository is linked with [render.com](render.com) provider. A new commit into the main branch triggers the delivery process.

End users with VR headsets simply open a browser, go to the [target site](https://analytics-vr.onrender.com/) and play with demos.

## UI.SDK

Besides static html files containing a-frame demos, I built an application utilizing GoodData UI.SDK.
It is stored in [ui.sdk](ui.sdk) folder.
Simply run:
```shell
cd ui.sdk
yarn install
yarn start
```
It is connected with GoodData cloud environment (demo-cicd.cloud.gooddata.com), you have to have access there.
