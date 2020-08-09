package main.kotlin.com.example
/*
Rotate a 2-D array by 90 degrees in a clockwise direction
 */
fun main(){
    val n = 5
    val a = Array(n){Array(n) {0} }
    fillArray(a)
    println("Input")
    printArray(a)
    for(i in 0 until n)
        for(j in i until n-i-1)
            rotate(a,i,j,n)
    println("Output")
    printArray(a)

}

fun swap(a:Array<Array<Int>>, x:Int, y:Int, t:Int):Int{
    val rtnval = a[x][y] //16
    a[x][y]=t
    return rtnval
}

fun rotate(a: Array<Array<Int>>, i: Int, j:Int, n:Int){

    //1st tr = 1 a, 0,3,1
    var temp = swap(a,j,n-1-i,a[i][j]) //temp = 4

    // 2nd br=4 a, 3,3,4
    temp = swap(a,n-i-1, n-j-1,temp)

    // 3rd a,3,0,16
    temp =  swap(a,n-j-1, i,temp)
    //4th a, 0,0,13
    swap(a,i,j,temp)
}

fun fillArray(a: Array<Array<Int>>) {
var i=1;
    for(x in 0 until a.size)
        for(y in 0 until a.size)
        {
            a[x][y]=i;
            i++
        }
}

fun printArray(a: Array<Array<Int>>) {
    for (row in 0 until a.size) {
        for (col in 0 until a.size)
            print("${a[row][col]}\t")
        println("")
    }
}
