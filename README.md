# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sanjana Aithal**

Time spent: **2** hours spent in total

Link to project: https://glitch.com/edit/#!/piquant-water-maize

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] A cool site background! :) 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

+<img src="https://github.com/skaithal/Light-and-Sound-Game/blob/15b4d7692404e802b414b660405e776d0bb7422e/ezgif-7-e55cd0fea929.gif?raw=true" width="1000px">



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

* In order to create the color-gradient background, I used the following public source code. Link: https://codepen.io/P1N2O/pen/pyBNzX
* In order to convert note to frequency, I used the following table. Link: https://anotherproducer.com/online-tools-for-musicians/frequency-to-pitch-calculator/
* In order to figure out how to embed an image inside a button, I used the following Stack Overflow link. Link: https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
* In order to properly size the image inside the button, I used a different Stack Overflow link with a similar question. Link: https://stackoverflow.com/questions/28578854/css-button-image-resizing/28578954


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A couple challenges I encountered in creating this submission are 
* (1) Figuring out the pitches for the song
    * For the first problem, I searched up the sheet music for the song, found a table converting note to pitch, and then programmed each button to emit that pitch to complete the 6-note intro! 
    * It was definitely a challenge to take the vision to reality given the intermediate steps, but I'm glad it worked out in the end!
* (2) Figuring out how to add images to the already present buttons to fit in a way that makes sense
    * For the second problem, I used a Stack Overflow thread with a similar issue to find how to format the image url within the button css framework. 
    * From here, I searched up how to resize the image within the button and found another Stack Overflow link, which instructed that I use the background-position paramters to focus the image.
* (3) The Game Logic 
    * For the third problem, I started to code the game logic first with big-picture vision of how the game works, and in doing so, ran into edge-case problems and/or missed details.
    * After this first failed approach, I restarted the game logic, this time following the given diagram almost exactly. 
    * I first created the ifelse statements that would frame the logic. 
    * From here, the rest of the logic came directly from the diagram, which was incredibly helpful!

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

In my process of creating the website, I wanted to learn more about how to frame the website so that it dynamically resizes to the shape of the screen + have the site elements occupy fixed spots on the website. In addition, the Javacript section's versatility and its dynamic nature was incredibly exciting to me; I would love to learn more about how recent forms of Javascript like React or Angular can be used to make the site more animated, aesthetic, and functional. Moreover, I would love to learn about UX design and the process that goes into creating a site with excellent UI; I have heard tools like Figma help web development teams plan their site out before development, I would love to learn how to effectively use such tools as well!

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

* If I had a few more hours to work on this project, I would firstly create rounds, each with different song samples by famous bands. Thus, each round becomes more than just a light/sound memory game, it becomes also a song guessing game!
* Secondly, I would implement a feature where users could 'pause' the game, as I think it is a small but important feature for game functionality, especially as there are multiple rounds.
* Lastly, I would implement a few more of the optional features, such as giving a user 3 guesses, setting time limits for user gueses, and speeding playback for every consequent round. 



## License

    Copyright Sanjana Aithal

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
