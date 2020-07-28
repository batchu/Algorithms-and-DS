package test

import com.example.DIRECTION.*
import com.example.getNextMove

import org.junit.Assert
import org.junit.Test


class SpiralTest{

    @Test
    fun testGetNextMoveShouldMoveRight(){

        val n = 4
        val a = Array(n){Array(n){-1}}
        // 1 2 3
        for(y in 0 until 2)
            a[0][y]=y+1
        val resp = getNextMove(0, 2, RIGHT, a, n-1)
        Assert.assertEquals(RIGHT, resp.d)
    }

    @Test
    fun testGetNextMoveShouldMoveDown(){
        val n = 4
        val a = Array(n){Array(n){-1}}
        for(y in 0 until n-1)
            a[0][y]=y+1
        val resp = getNextMove(0, 3, RIGHT, a, n-1)
        Assert.assertEquals(DOWN, resp.d)
    }
}