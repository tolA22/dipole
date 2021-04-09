

function maxOnes(arr){
		let max = 0
        let count = 0
        
        for(let i = 0; i< arr.length; i++){
        	if(arr[i] === 0){
            	max = count > max ? count : max
                count = 0
            }else{
            	count+=1
            }
        }
        return max
    }
    
    
   let result1 =  maxOnes([1,1,0,0,0,0,1,0,0,0,1])
   let result2 =  maxOnes([0,0,1,1,0,0,0,1,0,0,1,1,1,0])
   console.log(result1)
   console.log(result2)
