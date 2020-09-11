<h1 align="center">
    <img width="50%" alt="GoBarber" src="https://github.com/wellingtonleitedev/gobarber/blob/master/assets/logo.svg" />
    <br><br>
    GoBarber
</h1>

<h4 align="center">
  An application to schedule appointments in a barber shop from the mobile app and manage it from the web
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wellingtonleitedev/gobarber.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/wellingtonleitedev/gobarber.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wellingtonleitedev/gobarber.svg">
  <a href="https://github.com/wellingtonleitedev/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wellingtonleitedev/gobarber.svg">
  </a>

  <a href="https://github.com/wellingtonleitedev/gobarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/wellingtonleitedev/gobarber.svg">
  </a>
  
  <!--<a href="https://app.codacy.com/manual/wellingtonleitedev/gobarber?utm_source=github.com&utm_medium=referral&utm_content=wellingtonleitedev/gobarber&utm_campaign=Badge_Grade_Dashboard">
    <img src="https://api.codacy.com/project/badge/Grade/2a1eec01a9db4cf1ad802051ca4b9ece"/>
  </a>-->

  <img alt="GitHub" src="https://img.shields.io/github/license/wellingtonleitedev/gobarber.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">
    <img align="center" src="https://img.shields.io/badge/Technologies-a5a5a5"/>
  </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">
    <img align="center" src="https://img.shields.io/badge/How_To_Use-a5a5a5"/>
  </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bug-issues">
    <img align="center" src="https://img.shields.io/badge/Issues-a5a5a5"/>
  </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">
    <img align="center" src="https://img.shields.io/badge/License-a5a5a5"/>
  </a>
</p>

<h1 align="center">
  <img align="center" width="100%" src="https://github.com/wellingtonleitedev/gobarber/blob/master/assets/dashboard.png" alt="Screens Demo"/>
</h1>

<h3 align="center">Video Demo on Loom.</h3>
<p align="center">
  <a href="https://www.loom.com/share/59246947e438438cafdf10740a3feda9">
    <img width="15%" src="https://i.pinimg.com/originals/51/c5/2c/51c52cb5156376f013275fa1f5753b7c.png" />
  </a>
</p>

## :hammer_and_wrench: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies [Node.js][nodejs] + [Express Framework][express], [React][react] and [React Native][native] all with [Typescript][ts] and [Styled Components][styled-components] to handle styles architecture.

Developed on [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint] and [Prettier][vcprettier]

## :information_source: How To Use

To clone and run this application, you can use [Git](https://git-scm.com), [Node.js v12.16.0][nodejs] or higher + [Yarn v1.22.0][yarn] or higher, [Docker](https://www.docker.com/) and [React Native environment](https://react-native.rocketseat.dev/) installed on your computer. On your command line:

```bash
# Clone this repository
$ git clone https://github.com/wellingtonleitedev/gobarber

# Go into the repository
$ cd gobarber
```

### Back-end

```bash
# Go into backend
$ cd backend
$ cp .env.example .env
$ cp ormconfig.example.json ormconfig.json
```

After copying the examples, make sure to fill the variables with new values.

```bash
# Start Docker
$ docker-compose up -d

# Install dependencies
$ yarn install

# Run the application
$ yarn dev:server
```

### Front-end

```bash
# Go into frontend
$ cd frontend

# Install dependencies
$ yarn install

# Run the application
$ yarn start
```

### Mobile

```bash
# Go into mobile
$ cd mobile

# Install dependencies
$ yarn install

# Run the application
$ yarn start
$ yarn android
```

## :bug: Issues

If you find any problems, feel free to report us with the respective title and description in the [issues][repo-issues] section. If you already know a solution to this problem, fork it and contribute, it will be a pleasure to review your pull request!

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/wellingtonleitedev/gobarber/blob/master/LICENSE) for more information.

---

Made by Wellington Leite 👨‍💻 [Take a look!](https://www.linkedin.com/in/wellington-leite/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/
[react]: https://reactjs.org/
[native]: https://reactnative.dev/
[ts]: https://www.typescriptlang.org/
[styled-components]: https://styled-components.com/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[repo-issues]: https://github.com/wellingtonleitedev/gobarber/issues
