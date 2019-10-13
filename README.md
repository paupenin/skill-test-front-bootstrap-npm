# Skill test for Front-end Bootstrap and NPM

## GIT
1. Fork this repository to any git account
2. Commit you progress every time you're compleating a task, don't forget to push and the end
3. Share the repository to job@paupenin.com and send the URL with the same email you sent CV

## NPM
1. Use NPM to install packages
```sh
npm install
```

2. Compile `src` folder resources into `dist` folder
```sh
npm run build
```

3. Start development http://localhost:3000/ server
```sh
npm run start
```

## Bootstrap
1. Add functionality to the button to show the modal `#modal-skill-test`
2. Fix the form for proper styling with Bootstrap

## jQuery
1. Make an AJAX request using jQuery to [REQ|RES](https://reqres.in) API.
*The data of request must be the content introduced on the form.*
```javascript
{
  method: "POST",
  url: "https://reqres.in/api/users",
  data: {
      name: "Lorem", // input
      surname: "Ipsum", // input
      email: "lipsum@example.com", // input
  }
}
```

2. Close modal and reset input values after AJAX request completion

## sweetalert2
1. Install and require [sweetalert2](https://sweetalert2.github.io) (prefered via npm)
2. Show sweetalert2 modal after AJAX request with following configuration where `${name}`, `${surname}`, `${id}` and `${email}` are the returned data from API:
```javascript
{
  type: "success",
  title: `User '${name} ${surname}' (${id}) created`,
  text: `A confirmation email was sent to '${email}'`,
  showConfirmButton: false,
  timer: 1500
}
```

## SASS
1. Change theme primary color to `#0E2F44` with bootstrap global variable on `sass/common/_variables.scss`
2. Create and apply the mixin commented on file `sass/components/_modals.scss`