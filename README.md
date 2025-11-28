# React + Vite

Этот шаблон обеспечивает минимальную настройку для работы React в Vite с HMR и некоторыми правилами ESLint.

В настоящее время доступны два официальных плагина:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) использует [Babel](https://babeljs.io/) (или [oxc](https://oxc.rs) при использовании в [rolldown-vite](https://vite.dev/guide/rolldown)) для быстрого обновления
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) использует [SWC](https://swc.rs/) для быстрого обновления

## Компилятор React

Компилятор React не включен в этом шаблоне из-за его влияния на производительность разработки и сборки. Чтобы добавить его, см. [эту документацию](https://react.dev/learn/react-compiler/installation).

## Расширение конфигурации ESLint

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
