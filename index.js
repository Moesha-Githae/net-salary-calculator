function calculate() {
    var basicSalary = document.getElementById("basicSalary").value;
    var benefits = document.getElementById("benefits").value;
    var totalIncome = parseInt(basicSalary) + parseInt(benefits);
    var payeeTax = 0;
    var nhifDeduction = 0;
    var nssfDeduction = 0;
   var  netSalary = 0;
    // validate
    if	(isNaN(basicSalary))
	{
		alert("Please enter a valid number for basic salary.");
		return false;
	}
	
	if (basicSalary < 0) 
	{
		alert("basic salary cannot be less than zero.");
		return false;
	}
	
	// Validate non-cash benefits
	if (isNaN(benefits)) 
	{
		alert("Please enter a valid number for benefits.");
		return false;
	}

	if (benefits < 0) 
	{
		alert(" benefits cannot be less than zero.");
		return false;
	}
	
    // Calculate Payee Tax
   if(totalIncome < 24,000){
payeeTax = totalIncome * 10 ;
return;
   }	

if(totalIncome < 32,333	){
    payeeTax = totalIncome * 25;
    return;
}
if(totalIncome > 32,333	){
    payeeTax =  totalIncome * 30;
     return;
    }

    // Calculate NHIF Deduction
    if (totalIncome <7,999 )
    { nhifDeduction=300 ;
        return;
    }
    if (totalIncome <11,999 )
    { nhifDeduction=400 ;
        return;
    }
    if (totalIncome < 14,999 )
    { nhifDeduction=500 ;
        return;
    }
    if (totalIncome < 19,999 )
    { nhifDeduction=600 ;
        return;
    }
    if (totalIncome < 24,999 )
    { nhifDeduction=750 ;
        return;
    }     
    if (totalIncome < 29,999 )
    { nhifDeduction=850 ;
        return;
    }
    if (totalIncome < 34,999 )
    { nhifDeduction= 900 ;
        return;
    }
    if (totalIncome < 39,999 )
    { nhifDeduction=950 ;
        return;
    }
    if (totalIncome <44,999)
    { nhifDeduction=1,000 ;
        return;
    }
     if (totalIncome <49,999 )
     { nhifDeduction=1,100 ;
        return;
    }
     if (totalIncome < 59,999 )
     { nhifDeduction=1,200 ;
        return;
    }
     if (totalIncome < 69,999 )
     { nhifDeduction=1,300 ;
        return;
    }
     if (totalIncome < 79,999)
     { nhifDeduction= 1,400 ;
        return;
    }
      if (totalIncome < 89,999 )
        { nhifDeduction= 1,500 ;
            return;
    }
     if (totalIncome < 99,999 )
     { nhifDeduction= 1,600 ;
     return;
    }

     if( totalIncome >= 100,000 ){
      nhifDeduction = 1,700;
      return; 
}


    
    // Calculate NSSF Deduction
  nssfDeduction = 360;


    // Calculate Net Salary
    netSalary = totalIncome - payeeTax - nhifDeduction - nssfDeduction;
    
    document.getElementById("payeeTax").value = payeeTax;
    document.getElementById("nhifDeduction").value = nhifDeduction;
    document.getElementById("nssfDeduction").value = nssfDeduction;
    document.getElementById("netSalary").value = netSalary;
}
