<a name="readme-top"></a>

# HONIDA WAVE MUSIC PLAYER 

[![Rick Astley - Never Gonna Give You Up](https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)





## 1. Description.
Spotify clone built with React, Electron, and Firebase, where both user information and library content (songs, albums, and artists) will be hosted. All of this with clean code, best practices, and component reuse. 

It features a registration and login system.

In the application, we will have different sections, a left-side menu to access the artist, song, and album libraries, and below, different forms to create and upload new songs, albums, and artists.
At the bottom, we will have the player, with a volume control, a progress bar, a single play and pause button, and information about the song's name and photo.
On the right side, we will have buttons to log out and to access our user profile. Upon logging in, we can access the user settings menu where we can change the avatar, name, and password.

 
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/10.png)

![](https://github.com/DamianPyCoder/RandomAssets__minicons__V1/blob/main/songlibrary.svg)  On the left, the song image and name.  

![](https://github.com/DamianPyCoder/RandomAssets__minicons__V1/blob/main/play_circle_black.svg)  In the middle, the Play/Pause button with the song playback progress just below it.  

![](https://github.com/DamianPyCoder/RandomAssets__minicons__V1/blob/main/volum.svg)  On the right, the volume control.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 2. Built with.
<img src="https://github.com/DamianPyCoder/RandomAssets__icons__V2/blob/main/VSCode-Dark.svg" width="50"> <img src="https://github.com/DamianPyCoder/RandomAssets__icons__V2/blob/main/React-Dark.svg" width="50">
<img src="https://github.com/DamianPyCoder/RandomAssets__icons__V2/blob/main/Electron.svg" width="50">
<img src="https://github.com/DamianPyCoder/RandomAssets__icons__V2/blob/main/Firebase-Dark.svg" width="50">
<img src="https://github.com/DamianPyCoder/RandomAssets__icons__V2/blob/main/Sass.svg" width="50">
<img src="https://github.com/DamianPyCoder/RandomAssets__icons__V2/blob/main/Yarn-Dark.svg" width="50">
<img src="https://github.com/DamianPyCoder/RandomAssets__icons__V2/blob/main/NodeJS-Dark.svg" width="50">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 3. How to Download the Repository / Install the APK.

<details>
<summary>Clone the repository from GitHub</summary>
   
   - Open your terminal or command line on your computer.
   - Use the `git clone` command followed by the repository URL to clone the project to your local machine.
     ```
     git clone https://repository-url.git
     ```
     
</details>

<details>
<summary>Install dependencies</summary>
   
   - Once the repository is cloned to your local machine, navigate to the project directory.
   - Run the `npm install` command to install all the project dependencies defined in the `package.json` file.
     ```
     cd project-name
     npm install
     ```
     
</details>  

<details>
<summary>Configure Firebase</summary>
   
   - If the project is linked with Firebase, you may need to configure Firebase credentials in the project.
   - Open the Firebase configuration file (usually named `firebaseConfig.js` or similar) and ensure that the credentials are correct for your Firebase project.

</details>



<details>
<summary>Run the application</summary>
   
   - Once all dependencies are installed and configuration is complete, you can run the application.
   - Use the `npm start` command to start the application.
     ```
     npm start
     ```
     
</details>

<details>
<summary>Compile the application for Electron</summary>
   
   - If the project uses Electron JS, you may need to compile the application to work with Electron.
   - Follow the instructions provided in the project documentation to compile the application for Electron.
   - Typically, this involves running a specific build script for Electron.

</details>

<details>
<summary>Test the application</summary>
   
   - Once the application is up and running, open a web browser and access the application locally.
   - Ensure that all functionalities are working as expected, including Firebase-related functionalities such as authentication or database access.

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 4. Development Roadmap.

- [x] Design and organization of the app.
- [x] Selection of color palette, fonts and other issues related to UX/UI.
- [x] Database design.
- [x] Creating the React JS app and adding Electron JS and SASS.
- [x] Creating a project in Firebase and adding it to the app.
- [x] Navigation system.
    - [x] Zone for logged-in and non-logged-in users.
    - [x] Pages for the logged-in zone.
    - [x] Navigation for logged-in users.
    - [x] Navigation for non-logged-in users.
- [x] Registration and login system.
    - [x] Creating the registration form.
    - [x] Logout button.
    - [x] Creating the login form.
    - [x] Controlling and validating forms.
- [x] User zone layouts.
    - [x] Layout structure.
    - [x] Left Menu.
    - [x] Top Bar.
    - [x] Footer structure.
    - [x] Player structure.
- [x] User settings.
    - [x] Avatar component and communication with Firebase.
    - [x] Form to change displayName.
    - [x] Form to change email.
    - [x] Form to change password.
- [x] Forms for creating artists, albums, and uploading songs.
- [x] Home screen.
    - [x] Getting and rendering the latest artists.
    - [x] Getting and rendering albums.
    - [x] Getting and rendering songs.
- [ ] Multi-language Support.
    - [ ] English.
    - [x] Spanish.
    - [ ] French.
    - [ ] German.
    - [ ] Arabic.
- [x] Creating the music player.
    - [x] Controlling the song to be played.
    - [x] Volume control.
    - [x] Playing the song.
    - [x] Player controls.
    - [x] Timeline of the playback.
- [x] Electron configuration.
    - [x] Configuring width and height.
    - [x] Changing the app title and icon.
- [ ] Last refactoring and general check.
- [ ] Creating the documentation
- [ ] Expanding the app by implementing a comment system

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 5. Typography, Colors, Icons and Other Elements.  

### 5.1 Icons.
<img src="https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/logo-name-green.png" width="50">  <img src="https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/logo-white.png" width="50">  <img src="https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/logo-green.png" width="50">  
Source of the icon: [Uniconlabs](https://www.flaticon.es/icono-gratis/nota-musical_3293813?related_id=3293822&origin=search)  

### 5.2 Color palette.
<img src="https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/raw/main/reproductor_picts/Palette2.png" height="50%">  

<p align="right">(<a href="#readme-top">back to top</a>)</p>





## 6. Images and Videos.
### 6.1 Login and register.
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/0.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/1.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/2.png)



### 6.2 The library.
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/4.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/5.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/6.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/7.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/8.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/9.png)



### 6.3 Manage Library and Profile.
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/3.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/11.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/13.png)
![](https://github.com/DamianPyCoder/Program___ReactJS_ElectronJS___SpotifyClon/blob/main/reproductor_picts/12.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
