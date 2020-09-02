The purpose of the page is to load interesting segments from a company's balance sheet, income statement and cash flow statement. 
The items were selected by the author.

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

