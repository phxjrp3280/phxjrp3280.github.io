$(()=>{


//////////////////////// modal setup
  const $open = $('#openM');  //jquery address to the #openM in the html
  const $mod = $('#mod');       // jqury address to the #mod in the html
  const $close = $('#cls');    // jquery address to the #cls button

  const closeM = () => {
  $mod.css('display', 'none');
}

  const openM = () => {
  $mod.css('display', 'block');
}



$open.on('click', openM);

$close.on('click', closeM);
//////////////////////// modal setup
class ApiData{
    constructor(){
      this.currAsst = []
      this.totcast = []
      this.curliab = []
      this.totliab = []
      this.se = []
    }
  }
const api = new ApiData('api')

const getApiData = (input) =>{
  for(x=0;x<4;x++){
  api.currAsst[x] = (input.results[x].balanceSheet.assets.commercialsCurrentAssets.currentAssets/1000000)
  api.totcast[x] =  (input.results[x].balanceSheet.assets.totalAssets/1000000)
  api.curliab = (input.results[x].balanceSheet.liabAndStockEquity.liabilities.currentLiabilities.currentLiabilities/1000000)
  api.totliab = (input.results[x].balanceSheet.liabAndStockEquity.liabilities.totalLiabilities/1000000)
  api.se = (input.results[x].balanceSheet.liabAndStockEquity.stockholdersEquity.totalStockholdersEquity/1000000)
  }
  console.log(api.currAsst[2])
}




  $('form').on('submit', (event)=>{        // load the form
      event.preventDefault()

    $('.fincont').empty();

      const $symbol = $('#symbol')
      const actsym = $symbol.val()
      const $exchange = $('#exchange')
      const actexch = $exchange.val()

    console.log(actsym + ' mid ' + actexch)

/////////beginning of financial statement api ///////////////////////////////////

    var settings = {
    	"async": true,
    	"crossDomain": true,
    	"url": "https://morningstar1.p.rapidapi.com/convenient/fundamentals/yearly/restated?Mic=X"+actexch+"&Ticker="+actsym,
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "morningstar1.p.rapidapi.com",
    		"x-rapidapi-key": "a62c9da9f4msh1e92df7be31b53ep1bc3c4jsn5e703829f38c",
    		"accept": "string"
    	}
    }

    $.ajax(settings).done(function (response) {
    	let finArray = (response);

/////////////////////////////////////////////// end of  financial api
      getApiData(finArray)

//Balance Sheet highlights
      currAsst = (finArray.results[4].balanceSheet.assets.commercialsCurrentAssets.currentAssets/1000000)
      totAsst =  (finArray.results[4].balanceSheet.assets.totalAssets/1000000)
      currLiab = (finArray.results[4].balanceSheet.liabAndStockEquity.liabilities.currentLiabilities.currentLiabilities/1000000)
      totLiab = (finArray.results[4].balanceSheet.liabAndStockEquity.liabilities.totalLiabilities/1000000)
      shEqty = (finArray.results[4].balanceSheet.liabAndStockEquity.stockholdersEquity.totalStockholdersEquity/1000000)

console.log(finArray)

      //insert Assets header
      let $newh2 = $('<h2>')
      $newh2.text('Assets').attr('id','ahead')
      $('.fincont').append($newh2)

      //insert Current Assets detail
      let $h3det = $('<h3>').attr('id','holder')
      $('#ahead').append($h3det)

      let $newh3 = $('<h3>').text('Current Assets:').attr('id','ca')
      $('#holder').append($newh3)
      let $newh3a = $('<h3>').text(currAsst).attr('id','can')
      $('#holder').append($newh3a)

      //insert total assets detail
      // so it is apparently necessary to put two items in one to keep them together to format correctly
      // i'm struggling with a naming convention that is sensible but ignorable
      let $h3deta = $('<h3>').attr('id','holdera')
      $('#ahead').append($h3deta)
      let $newh3b = $('<h3>').text('Total Assets:').attr('id','ta')
      $('#holdera').append($newh3b)
      let $newh3c = $('<h3>').text(totAsst).attr('id','can')
      $('#holdera').append($newh3c)

      //insert Liabilities header  h2 wrap

      let $newh2wrap = $('<h2>')
      $newh2wrap.text('Liabilities').attr('id','liabhead')
      $('.fincont').append($newh2wrap)

      // wrapper for text and data element $datawrapla - data wrapper l iabilites a
      let $datawrapla = $('<h3>').attr('id','dwa')
      $('#liabhead').append($datawrapla)

      // insert current liabilities detail new l iabilities h3
      let $newLh3 = $('<h3>').text('Current Liabilities: ').attr('id','cl')     // label
      $('#dwa').append($newLh3)

      //insert total liabilities detail
      let $newLh3a = $('<h3>').text(currLiab).attr('id','can')                   //data
      $('#dwa').append($newLh3a)
//************
        //                                                                      wrap
      let $datawraplb = $('<h3>').attr('id','dwb')
      $('#liabhead').append($datawraplb)

      // insert total liabilities detail label
      let $newLh3b = $('<h3>').text('Total Liabilities: ').attr('id','tl')     // label
      $('#dwb').append($newLh3b)

      //insert total liabilities detail data
      let $newLh3c = $('<h3>').text(totLiab).attr('id','can')                   //data
      $('#dwb').append($newLh3c)




      let $newseh2wrap = $('<h2>')
      $newseh2wrap.text('Shareholder Equity').attr('id','sehead')
      $('.fincont').append($newseh2wrap)

      let $datawrapse = $('<h3>').attr('id','dwse')
      $('#sehead').append($datawrapse)

      // insert total shareholder equity detail label
      let $newseh3a = $('<h3>').text('Shareholder Equity: ').attr('id','se')     // label
      $('#dwse').append($newseh3a)

      //insert total shareholder equity detail data
      let $newseh3b = $('<h3>').text(shEqty).attr('id','can')                   //data
      $('#dwse').append($newseh3b)


// Income Statement highlights
      sales = (finArray.results[4].incomeStatement.revenue/1000000)
      cogs = (finArray.results[4].incomeStatement.costOfRevenue/1000000)
      ebitda = (finArray.results[4].incomeStatement.ebitda/1000000)
      netInc = (finArray.results[4].incomeStatement.netIncomeFromContinuingOperations/1000000)

      console.log(currAsst, totAsst, currLiab, totLiab, shEqty)
      console.log(sales, cogs, ebitda,netInc)

// cash flow highlights

      begCash = (finArray.results[4].cashflowStatement.cashAtBeginningOfPeriod/1000000)
      endCash = (finArray.results[4].cashflowStatement.cashAtEndOfPeriod/1000000)
      capExp = (finArray.results[4].cashflowStatement.freeCashFlow.capitalExpenditure/1000000)
      opCashFlo = (finArray.results[4].cashflowStatement.freeCashFlow.operatingCashFlow/1000000)


      // console.log(currAsst, totAsst, currLiab, totLiab, shEqty)
      // console.log(sales, cogs, ebitda,netInc)
      // console.log(begCash,endCash,capExp,opCashFlo)

    });
  })
})
