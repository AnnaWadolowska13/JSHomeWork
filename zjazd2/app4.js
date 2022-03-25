class Matrix{
    constructor(rows, cols, ...data){
        this.cols = cols;
        this.rows = rows;
        this.matrix = [];
        if(rows*cols === data.length){
            for(let i=0; i < rows; i++){
                let row = [];
                for(let j=0; j < cols; j++){    
                    row.push(data[i*cols + j]);
                }
                this.matrix.push(row);
            }            
        }else{
            throw "data is wrong"
        }
    }
    multiplyByMatrix = (matrixToMultiply) => {
        if(this.cols === matrixToMultiply.rows){
            let data =[];
            for(let i=0; i < this.rows; i++){
                for(let j=0; j < matrixToMultiply.cols; j++){    
                    let intermediateResult = 0;
                    for(let k=0; k < this.cols; k++){
                        intermediateResult += (this.matrix[i][k] * matrixToMultiply.matrix[k][j]);
                    }
                    data.push(intermediateResult)
                }
            }  
            // return data;
            return new Matrix(this.rows, matrixToMultiply.cols, ...data)    
        }else{
            console.log("can't multiply this matrixes ")
        }
    }
}

const firstMatrix = new Matrix(3,4, 1,2,3,4,5,6,7,8,9,8,7,6);
const secondMatrix = new Matrix(4,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1);

const result = firstMatrix.multiplyByMatrix(secondMatrix);

console.log(result);