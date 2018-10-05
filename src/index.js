module.exports = function solveSudoku(matrix) {let i = 0;
  let j = 0; //столбец
  let mass_x = [];
  let mass_y = [];
  
    for (i=0; i<9; i++)
    {
      for(j=0; j<9; j++)
      {
        if (matrix[i][j] == 0) {
          
          for(let q=0; q<9; q++)
          {
          mass_x[q] = matrix[i][q];
          }
  
          
          
          for(let q=0, w = 0; q<9, w<9; q++, w++)
          {
          mass_y[q] = matrix[w][j];
          }
  
          let mass_kv = [];
          let m = 0;
  
           if((i==0 || i==1 || i==2) && (j==0 || j==1 || j==2))
           {
             mass_kv[m]=matrix[0][0];
             m++;
             mass_kv[m]=matrix[0][1];
             m++;
             mass_kv[m]=matrix[0][2];
             m++;
             mass_kv[m]=matrix[1][0];
             m++;
             mass_kv[m]=matrix[1][1];
             m++;
             mass_kv[m]=matrix[1][2];
             m++;
             mass_kv[m]=matrix[2][0];
             m++;
             mass_kv[m]=matrix[2][1];
             m++;
             mass_kv[m]=matrix[2][2];
             m++;
           }
           if((i==0 || i==1 || i==2) && (j==3 || j==4 || j==5))
           {
             mass_kv[m]=matrix[0][3];
             m++;
             mass_kv[m]=matrix[0][4];
             m++;
             mass_kv[m]=matrix[0][5];
             m++;
             mass_kv[m]=matrix[1][3];
             m++;
             mass_kv[m]=matrix[1][4];
             m++;
             mass_kv[m]=matrix[1][5];
             m++;
             mass_kv[m]=matrix[2][3];
             m++;
             mass_kv[m]=matrix[2][4];
             m++;
             mass_kv[m]=matrix[2][5];
             m++;
           }
           if((i==0 || i==1 || i==2) && (j==6 || j==7 || j==8))
           {
             mass_kv[m]=matrix[0][6];
             m++;
             mass_kv[m]=matrix[0][7];
             m++;
             mass_kv[m]=matrix[0][8];
             m++;
             mass_kv[m]=matrix[1][6];
             m++;
             mass_kv[m]=matrix[1][7];
             m++;
             mass_kv[m]=matrix[1][8];
             m++;
             mass_kv[m]=matrix[2][6];
             m++;
             mass_kv[m]=matrix[2][7];
             m++;
             mass_kv[m]=matrix[2][8];
             m++;
           }
           if((i==3 || i==4 || i==5) && (j==0 || j==1 || j==2))
           {
             mass_kv[m]=matrix[3][0];
             m++;
             mass_kv[m]=matrix[3][1];
             m++;
             mass_kv[m]=matrix[3][2];
             m++;
             mass_kv[m]=matrix[4][0];
             m++;
             mass_kv[m]=matrix[4][1];
             m++;
             mass_kv[m]=matrix[4][2];
             m++;
             mass_kv[m]=matrix[5][0];
             m++;
             mass_kv[m]=matrix[5][1];
             m++;
             mass_kv[m]=matrix[5][2];
             m++;
           }
           if((i==3 || i==4 || i==5) && (j==3 || j==4 || j==5))
           {
             mass_kv[m]=matrix[3][3];
             m++;
             mass_kv[m]=matrix[3][4];
             m++;
             mass_kv[m]=matrix[3][5];
             m++;
             mass_kv[m]=matrix[4][3];
             m++;
             mass_kv[m]=matrix[4][4];
             m++;
             mass_kv[m]=matrix[4][5];
             m++;
             mass_kv[m]=matrix[5][3];
             m++;
             mass_kv[m]=matrix[5][4];
             m++;
             mass_kv[m]=matrix[2][5];
             m++;
           }
           if((i==3 || i==4 || i==5) && (j==6 || j==7 || j==8))
           {
             mass_kv[m]=matrix[3][6];
             m++;
             mass_kv[m]=matrix[3][7];
             m++;
             mass_kv[m]=matrix[3][8];
             m++;
             mass_kv[m]=matrix[4][6];
             m++;
             mass_kv[m]=matrix[4][7];
             m++;
             mass_kv[m]=matrix[4][8];
             m++;
             mass_kv[m]=matrix[5][6];
             m++;
             mass_kv[m]=matrix[5][7];
             m++;
             mass_kv[m]=matrix[5][8];
             m++;
           }
           if((i==6 || i==7 || i==8) && (j==0 || j==1 || j==2))
           {
             mass_kv[m]=matrix[6][0];
             m++;
             mass_kv[m]=matrix[6][1];
             m++;
             mass_kv[m]=matrix[6][2];
             m++;
             mass_kv[m]=matrix[7][0];
             m++;
             mass_kv[m]=matrix[7][1];
             m++;
             mass_kv[m]=matrix[7][2];
             m++;
             mass_kv[m]=matrix[8][0];
             m++;
             mass_kv[m]=matrix[8][1];
             m++;
             mass_kv[m]=matrix[8][2];
             m++;
           }
           if((i==6 || i==7 || i==8) && (j==3 || j==4 || j==5))
           {
             mass_kv[m]=matrix[6][3];
             m++;
             mass_kv[m]=matrix[6][4];
             m++;
             mass_kv[m]=matrix[6][5];
             m++;
             mass_kv[m]=matrix[7][3];
             m++;
             mass_kv[m]=matrix[7][4];
             m++;
             mass_kv[m]=matrix[7][5];
             m++;
             mass_kv[m]=matrix[8][3];
             m++;
             mass_kv[m]=matrix[8][4];
             m++;
             mass_kv[m]=matrix[8][5];
             m++;
           }
           if((i==6 || i==7 || i==8) && (j==6 || j==7 || j==8))
           {
             mass_kv[m]=matrix[6][6];
             m++;
             mass_kv[m]=matrix[6][7];
             m++;
             mass_kv[m]=matrix[6][8];
             m++;
             mass_kv[m]=matrix[7][6];
             m++;
             mass_kv[m]=matrix[7][7];
             m++;
             mass_kv[m]=matrix[7][8];
             m++;
             mass_kv[m]=matrix[8][6];
             m++;
             mass_kv[m]=matrix[8][7];
             m++;
             mass_kv[m]=matrix[8][8];
             m++;
           }
            let q=0, k = 0;
            let no_mass_x = [];
            let qq = 0;
            for(let number = 1; number < 10; number ++)
            { 
            for(q=0;q<9;q++)
                { k = 0;
                
                if(mass_x[q] == number)
                {
                    k=1;
                    break;
                }
            }
             if(k==0){
                    no_mass_x[qq] = number;
                    qq++;
                }
             }
            
            q=0;
            let no_mass_y = []; 
            qq = 0;
            
            for(let number = 1; number < 10; number ++)
            { 
            for(q=0;q<9;q++)
            {  k = 0;
                
                if(mass_y[q] == number)
                {
                    k=1; 
                    break;
                }
               
            } if(k==0){
                    no_mass_y[qq] = number;
                    qq++;
                }
             }
            
            
            let no_mass_kv = [];
            qq=0;
            
            for(let number = 1; number < 10; number ++)
            { 
            for(m=0;m<9;m++)
            {  k = 0;
                
                if(mass_kv[m]== number)
                {
                    k=1; 
                    break;
                }
               
            } if(k==0){
                    no_mass_kv[qq] = number;
                    qq++;
                }
             }
            
            for(q=0;q<no_mass_x.length;q++)
            {
                for(qq=0;qq<no_mass_y.length;qq++)
                {
                    for(m=0;m<no_mass_kv.length;m++)
                    {
            if(no_mass_x [q] == no_mass_y[qq] && no_mass_y[qq] == no_mass_kv[m])
            {
                matrix[i][j] = no_mass_x[q];
            }
                    }
                }
            }
  
        }
  
      }
    }
  
      
  return(matrix);
}
