const rowReplaceZero = (arr) => {

    let row = []
    let col = []
    //first get the row and column
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 0){
              if(row.includes(i) === false  ){
                row.push(i)
              }
              if(col.includes(j) === false  ){
                col.push(j)
              }
            }
        }
    }
  console.log(row,col)
    //convert the row and column to zero
    row = row.sort()
    col = col.sort()

    for(let i = 0 ; i < row.length;i++){
      for(let j = 0; j < arr[0].length; j++){
        
        arr[row[i]][j] = 0
      }
    }
    


    for(let i = 0 ; i < col.length;i++){
      for(let j = 0; j < arr.length; j++){
        arr[j][col[i]] = 0
      }
    }


    // display resylt
    for(let i = 0; i < arr.length; i++){
        let ans = ""
        for(let j = 0; j < arr[i].length; j++){
          ans+=arr[i][j] + " "
        } 
        console.log(ans)
    }
    return arr;
}


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

  let result3 = rowReplaceZero([[1,2,3,4],[5,6,7,8],[9,10,0,11],[12,13,14,15]])
  console.log(result3)