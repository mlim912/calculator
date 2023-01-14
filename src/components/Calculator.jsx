import React, { useState } from "react";  
import styles, { layout } from "../style";
import { options } from "../constants";   
//import axios from "axios"

const Calculator = () => { 
  const [income1, setIncome1] = useState(0);
  const [income2, setIncome2] = useState(0);
  const [loan, setLoan] = useState(0);
  const [credit_card, setCreditcard] = useState(0); 
  const [deposit, setDeposit] = useState(0); 
  const [totalIncome, setIncome] = useState(0); 
  const [totalLoans, setLoans] = useState(0);

  const [borrowingResult, setBorrowingResult] = useState(0);
  const [propertyResult, setPropertyResult] = useState(0); 

  const getInitialState = () => {
    const value = "1"; 
    return value;
  };
  
  const [value, setValue] = useState(getInitialState);
  const [value2, setValue2] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value); 
  };

  const handleChange2 = (e) => {
    setValue2(e.target.value); 
  }; 

  function getBorrowingResult() {   

    setIncome(parseInt(income1)*parseInt(value)+parseInt(income2)*parseInt(value2))
    let borrowing = ((parseInt(income1)*parseInt(value)+parseInt(income2)*parseInt(value2))*5) - (parseInt(loan)+parseInt(credit_card))
    setBorrowingResult(borrowing);

    setLoans(loan)
 
    let property = borrowing+parseInt(deposit);
    setPropertyResult(property);   
  }

  function clearInput() {
    setIncome1("0");
    setIncome2("0");
    setDeposit("0");
    setLoan("0");
    setCreditcard("0");
    setBorrowingResult("0");   
    setPropertyResult("0")
    setIncome("0");
    setLoans("0")
  }  
 

  // Add dynamic form fields for Loans where users can add or remove input fields dynamically (working but not implemented yet)
  const [loansList, setLoansList] = useState([{ loan: "" }]);

  const handleLoansChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...loansList];
    list[index][name] = value;
    setLoansList(list);
  };

  const handleLoanRemove = (index) => {
    const list = [...loansList];
    list.splice(index, 1);
    setLoansList(list);
  };

  const handleLoanAdd = () => {
    setLoansList([...loansList, { loan: "" }]);
  }; 

  //Add/remove input fields for additional incomes (working but not implemented yet)
  const [incomesList, setIncomesList] = useState([{ income: "" }]);
 
  const handleIncomesRemove = (index) => {
    const list = [...incomesList];
    list.splice(index, 1);
    setIncomesList(list);
  };

  const handleIncomesAdd = () => {
    incomesList([...incomesList, {incomes: "" }]);
  }; 

//Fetching results from API (working but not implemented in this project)
//const onSubmit = async (e) => {
//   setIncome(parseInt(income1)+parseInt(income2))
//   setLiabilities(parseInt(loan)+parseInt(credit_card))
//   const post = { "total_income": parseInt(total_income),
//   "total_liabilities": parseInt(total_liabilities),
//   "deposit": parseInt(deposit)};
//    try {
//      const res = await axios.post('https://test-api-self.vercel.app/calculate', post );
//      res.headers.set("access-control-allow-origin", "*")
//      console.log(res.headers)
      
//      setBorrowingResult(parseInt(res.data.result.borrowing))
//      setPropertyResult(res.data.result.property)    
//      console.log(res.data)
//    } catch (e) {
//      console.log(e)
//    }
//  }  

  
  return (
    <section id="calculator" className={`${layout.sectionReverse}, items-start` }> 
      <div className={`${layout.sectionInfo}` }> 
        <div className="w-full max-w-2xl m-10 shadow-lg shadow-indigo-500 rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
       
          <form className="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center mb-6 text-xl text-white font-poppins font-bold"> Calculator</h1>

            {/* The toggle button(commented code chunk below) is displayed correctly, but it hasn't been set to hide/show an additional form field for an additional applicant yet. */}

            {/* <label
                className="block text-white text-sm font-poppins mb-1"
                for="username"
              >
                How many of you are buying this property?
              </label>
            <div
                class="grid grid-cols-2 space-x-2 rounded-xl bg-gray-200 p-1 font-poppins"
                x-data="app" 
              >
                 
                <div>
                  <input type="radio" name="option" id="1" class="peer hidden"  checked/>
                  <label
                    for="1"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-indigo-700 peer-checked:font-bold peer-checked:text-white"
                    >Just me</label
                  >
                </div>

                <div>
                  <input type="radio" name="option" id="2" class="peer hidden"   />
                  <label
                    for="2"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-indigo-700 peer-checked:font-bold peer-checked:text-white"
                    >I'm buying with someone</label
                  >
                </div>  
              </div>  */}

               
          <div className="flex mb-3 mt-6">
            <div className="h-20 flex-grow card bg-base-300 rounded-box place-items-right w-full"> 
            <label
                className="block text-white text-sm font-poppins mb-1"
                for="username"
              >
                What is your base salary/wages? (before tax)
              </label>
              <input
                className="w-full flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-700 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                id="Income1 "
                type="integer"
                placeholder="Income in $"
                value={ income1 }
                onChange={(e) => setIncome1(e.target.value)}
              />
              </div>
            <div className="w-2/6 h-20 flex-grow card bg-base-300 rounded-box place-items-right  ">
            <label class="block text-white text-sm font-poppins mb-1">Select one</label>  
                <select value={value} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
            </div>
          </div> 

          <div className="flex mb-3">
            <div className="h-20 flex-grow card bg-base-300 rounded-box place-items-right w-full"> 
            <label
                className="block text-white text-sm font-poppins mb-2"
                for="username"
              >
                What is the second applicant's base salary? (before tax)
              </label>
              <input
                className="w-full flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-700 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                id="Income2 "
                type="integer"
                placeholder="Income in $"
                value={ income2 }
                onChange={(e) => setIncome2(e.target.value)}
                
              />
              </div>
            <div className="w-2/6 h-20 flex-grow card bg-base-300 rounded-box place-items-right">
            <label class="block text-white text-sm font-poppins mb-2">Select one</label> 
                  <select value={value2} onChange={handleChange2} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">                  
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
            </div>
          </div>  

            <div className="mb-6">
              <label
                className="block text-white text-sm font-poppins mb-2"
                for="password"
              >
                If you have any loans, enter your total loan below.
              </label>
              <input
                className="form-control block w-full px-4 py-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 inline-flex items-center text-sm font-medium text-center bg-gray-100" 
                id="loans"
                type="integer"
                placeholder="Loans in $"
                value={loan}
                onChange={(e) => setLoan(e.target.value)}
              />
            </div> 

            <div className="mb-6">
              <label
                className="block text-white text-sm font-poppins mb-2"
                for="password"
              >
                If you have any credit cards, what is your total credit card limits?
              </label>
              <input
                className="form-control block w-full px-4 py-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 inline-flex items-center text-sm font-medium text-center bg-gray-100" 
                id="creditCard"
                type="integer"
                placeholder="Credit Card in $"
                value={ credit_card }
                onChange={(e) => setCreditcard(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-white text-sm font-poppins mb-2"
                for="password"
              >
                How much deposit do you have?
              </label>
              <input
                className="form-control block w-full px-4 py-3 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 inline-flex items-center text-sm font-medium text-center bg-gray-100" 
                id="Deposit"
                type="integer"
                placeholder="Deposit in $"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
              />
            </div> 

            <div className="flex justify-between space-x-4"> 
              <button
                className={`py-4 px-8 w-1/1 font-poppins font-medium text-[18px] text-indigo-700 bg-gray-200 rounded-[10px] outline-none ${styles}`}
                type="button"
                onClick={clearInput}
              >
                Clear
              </button>  
              <button
                className={`py-4 px-4 w-4/5 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}
                type="button"
                onClick={getBorrowingResult}
              >
                Calculate Affordability
              </button>    
            </div> 
          </form>
        </div>
      </div>

      <div className={layout.sectionImgReverse}>  
        <div class="mt-10 w-full max-h-md max-w-md p-4 bg-blue-gradient rounded-lg shadow-md sm:p-8 dark:bg-gray-800  ">
            <div class="flex items-center justify-between mb-4">
                <h5 class="mt-6 text-xl font-bold leading-none text-white dark:text-white font-poppins">Result</h5>
                
          </div>
          <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="font-poppins text-sm font-medium text-gray-100 truncate dark:text-white">
                                 You could borrow up to
                                </p> 
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-100 dark:text-white">
                            ${borrowingResult} 
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0"> 
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="font-poppins text-sm font-medium text-gray-100 truncate dark:text-white">
                                  You could afford a property up to
                                </p> 
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-100 dark:text-white">
                              ${propertyResult}
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="font-poppins text-sm font-medium text-gray-200 truncate dark:text-white">
                                    Total Income
                                </p> 
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-200 dark:text-white">
                                ${totalIncome}
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="font-poppins text-sm font-medium text-gray-200 truncate dark:text-white">
                                    Total Loans
                                </p> 
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-200 dark:text-white">
                                 ${totalLoans}
                            </div>
                        </div>
                    </li> 
                </ul>
          </div> 
        </div>
      </div> 
    </section>
  );
}

export default Calculator 
