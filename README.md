# React + Vite

Этот шаблон обеспечивает минимальную настройку для работы React в Vite с HMR и некоторыми правилами ESLint.

В настоящее время доступны два официальных плагина:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) использует [Babel](https://babeljs.io/) (или [oxc](https://oxc.rs) при использовании в [rolldown-vite](https://vite.dev/guide/rolldown)) для быстрого обновления
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) использует [SWC](https://swc.rs/) для быстрого обновления

## Компилятор React

Компилятор React не включен в этом шаблоне из-за его влияния на производительность разработки и сборки. Чтобы добавить его, см. [эту документацию](https://react.dev/learn/react-compiler/installation).

## Расширение конфигурации ESLint

Если вы разрабатываете производственное приложение, рекомендуем использовать TypeScript с включёнными правилами линтинга, учитывающими тип. Ознакомьтесь с [шаблоном TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), чтобы узнать, как интегрировать TypeScript и [`typescript-eslint`](https://typescript-eslint.io) в ваш проект.