# CodePathPrework
Light and Sound Memory Game

# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Kim Tran

Time spent: 5

Link to project: https://glitch.com/edit/#!/tinted-obsidian-lightyear?path=script.js%3A148%3A0

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
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Ask how many turn the user want to play

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
https://drive.google.com/file/d/1wwfbyrYe6-Vhog0QaPs09GhwX5jrinfH/view?usp=sharing


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/jsref/met_win_prompt.asp
https://fonts.google.com/
https://colorhunt.co/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I could not make the sound play in sequence at first. I tried to look it up on the internet and several people are encountering the same problem as me. Turn out I need to specify when the sound end or it would just play the final sound that I declare. 
Also, Javascript, in general, is just challenging to use for me as I'm used to the structure of Java which is a very strict type of language and have a good OOP style.  The way I think of the logic still follows the path of Java language and sometimes it could not apply to Javascript. 
Debugging takes time too. At some point, I just sit for hours trying everything I could think of to make the code work but I still didn't, especially for the gameplay. I overcome this by making a test button and debugging the Javascript function I want to test using that test function to not mess up with the code in the main game. Printing into the console helps to dedbug too. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I want to know more about how to make a complex web (including server, API...) as this game is only the very basic part of web programming and I still struggling to debug it a lot. I tried to implement a to-do list before but got stuck and have no one to ask. I hope through this chance internship I can have a better understanding of coding websites so that I will not jump into bugs that I do not know where they come from and how to fix it.  I also saw that it depend a lot on the coding logic for the web to load fast or slow. I want to learn more about how to optimize and reduce web application load time.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I have more time I would figure out how to make my game work at all times, for now, sometimes it works smoothly but other times it just runs into bugs. In general, my game is not stable at the time. Also, I would refactor my code to be more optimized and adapt better design. In addition, I would add more functions to the game as for now there are some optional suggestions in the tutorial that I have not touched on yet. 



## Interview Recording URL Link

[My 5-minute Interview Recording]
https://drive.google.com/file/d/1AN_w3gYy-73I9XJrDFgSdT-PjfRR4vTk/view?usp=sharing


## License

    Copyright [Kim Tran]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
