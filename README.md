The purpose of the screen is to load interesting segments from a company's balance sheet, income statement and cash flow statement. 
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
  without logically removing the hard coded framework.  I finally decided to eliminate the interior entirely and code the framework as a
  part of the jquery process.  Then when i emptied the content of the html div I was much happier with the result.

  
  Improvements:
  1.  I was dissatisfied with my initial attempt where I had the building of the html inside the same function as the ajax call.  It is monday and I plan on 
    creating a function call to do the work outside of the main call.  Additionally, I plan on naming the ajax function and calling to see if it will still work. 
    It seems like an improvement in readability.
    
  2.  Additionally, I plan on adding links to financial articles on the site as well.  Off to the side at first and then resizing to beneath the financial data
    if the screen size gets small enough.
