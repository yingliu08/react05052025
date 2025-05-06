const axios = require("axios");

const api_url = "https://jsonmock.hackerrank.com/api/transactions";

async function getTransferByPage(page=1) {
  const {data} = await axios.get(
    `https://jsonmock.hackerrank.com/api/transactions?page=${page}`,
  );
  return data;
}


async function maximumTransfer(name, city) {

  let maxCredit = 0;
  let maxDebit = 0;

  let currPage = 1
  do {
    var {total_pages, data} = await getTransferByPage(currPage);

    data.forEach((trans)=>{
        const {userName, txnType, location: {city: transCity}} = trans;

        if(userName!==name || transCity !== city) return;
      
        // let {amount} = trans;
        // amount = amount.replace("$","").split(",").join("");
        // amount = parseFloat(amount);
        const amount = parseFloat(trans.amount.replace("$","").split(",").join(""));


        if(txnType==="debit"){
          maxDebit = Math.max(amount, maxDebit)
        } else if (txnType==="credit"){
          maxCredit = Math.max(amount, maxCredit)
        }
    })    
    currPage++;
  } while(currPage <= total_pages)

  return [maxCredit,maxDebit];
}

maximumTransfer("John Oliver",'Ripley').then(console.log);
