document.getElementById('inputNumber').addEventListener('input',function(){
    const result = document.getElementById('outputResult');
    const inputValue = this.value.trim();
    if(!inputValue)
      {
        result.style.display = 'none';
        return;
      }
    
    const number = parseInt(inputValue, 10);  
    let nextNumber = number;
    let Even_arr = [];
    let Odd_arr = [];
    
    if(nextNumber < 0)
      {
        result.innerHTML = '<p>Enter a positive number</p>';
      }
    else if(nextNumber === 0 )
      {
       result.innerHTML = '<p>Enter number greater then Zero. <br> Zero is neither Odd nor Even </p>'; 
      }
    else if(nextNumber > 0)
      {
        if(nextNumber % 2 != 0)
          {
            nextNumber = nextNumber + 2;
            for(let i = 0 ; i < 3 ; i++ )
              {
                Odd_arr.push(nextNumber);
                nextNumber = nextNumber + 2;
              }
            result.innerHTML = `<p>${Odd_arr.join(', ')}</p>`;
          }
        else
          {
            nextNumber = nextNumber + 2 ;
            while(Even_arr.length < 3){
              Even_arr.push(nextNumber);
              nextNumber =nextNumber+2;
            }
            result.innerHTML = `<p>${Even_arr.join(', ')}</p>`;
          }
      }
    
    result.style.display = 'block';
  });