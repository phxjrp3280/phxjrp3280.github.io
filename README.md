The purpose of the page is to load interesting segments from a company's balance sheet, income statement and cash flow statement. 
The items were selected by the author.  The user inputs the exchange value, either NAS for nasdaq or NYS for the NYSE and then puts
in the ticker of the stock they're looking up.

Technologies Used:
  Javascript is used to create the web page and perform the logic necessary to present the information
  
  JQuery is the command library used by javascript to insert lines into the screen.  
  
  HTML is used to create the basic structure of the page.
  
  CSS is used to style the web page.
  
  Ajax makes the call to the API.
  
  Challenges:  
  1.  I initially created a framwork within my primary html display page in an attempt to help "organize" my thoughts
  and offer something hard coded to append to with jquery.  The problem is that I couldn't find a simple way to remove the information
  without logically removing the hard coded framework.  I finally decided to eliminate the interior entirely and code the framework as 
  a part of the jquery process.  Then when i emptied the content of the html div I was much happier with the result.

  
  Improvements:
  I got the responsive design part working right by fully understanding the diaplay:none css statement and then understanding the meaning of cascade in cascading style sheets.  I need to rip out the unnecessary code that is in my media reponse but I dare not do it before presentation day.
  
  I got the numbers to appear as $s by using the Intl.NumberFormat - this was actually a little hard to find but it works.
    
Additionally, I plan on adding links to financial articles on the site as well.  Off to the side at first and then resizing to beneath the financial data if the screen size gets small enough.

It is wednesday of project week and I'm going to work with the ajax call to try and trap ther errors so the user can get an appropriate response.  

Then I saw a sample readme file that had all this stuff in it......

Jvest


https://phxjrp3280.github.io/
A tidy web page that brings back interesting pieces of corporate financial statements

For more on these wonderful badgers badges, refer to badgerbadgerbadger.

The page as you first arrive is a simple input screen: 

HAVE WHITE SPACE
MAKE IT PRETTY
GIFS ARE REALLY COOL
GIF Tools


Installation
Features
Contributing
Team
FAQ
Support
License
Example (Optional)
// code away!

let generateProject = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    code.push(js);
  }
};
Installation
All the code required to get started
Images of what it should look like
Clone
Clone this repo to your local machine using https://github.com/fvcproductions/SOMEREPO
Setup
If you want more syntax highlighting, format your code like this:
update and install this package first

$ brew update
$ brew install fvcproductions
now install npm and bower packages

$ npm install
$ bower install
For all the possible languages that support syntax highlithing on GitHub (which is basically all of them), refer here.
Features
Usage (Optional)
Documentation (Optional)
Tests (Optional)
Going into more detail on code and technologies used
I utilized this nifty Markdown Cheatsheet for this sample README.
Contributing
To get started...

Step 1
Option 1

🍴 Fork this repo!
Option 2

👯 Clone this repo to your local machine using https://github.com/joanaz/HireDot2.git
Step 2
HACK AWAY! 🔨🔨🔨
Step 3
🔃 Create a new pull request using https://github.com/joanaz/HireDot2/compare/.
Team
Or Contributors/People

FVCproductions	FVCproductions	FVCproductions
FVCproductions	FVCproductions	FVCproductions
github.com/fvcproductions	github.com/fvcproductions	github.com/fvcproductions
You can just grab their GitHub profile image URL
You should probably resize their picture using ?s=200 at the end of the image URL.
FAQ
How do I do specifically so and so?
No problem! Just do this.
Support
Reach out to me at one of the following places!

Website at fvcproductions.com
Twitter at @fvcproductions
Insert more social links here.
Donations (Optional)
You could include a Gratipay link as well.
Support via Gratipay

License
License

MIT license
Copyright 2015 © FVCproductions.


