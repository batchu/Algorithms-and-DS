package com.example

import com.example.DIRECTION.*

fun main() {
    val n = 5
    val a = Array(n) { Array(n) { -1 } }
    var x = 0
    var y = 0
    var d = RIGHT
    var c = n - 1 //Current pass - Starts with the outermost square
    for (i in 1..n * n) {
        a[x][y] = i
        val nm = getNextMove(x, y, d, a, c)
        x = nm.x
        y = nm.y
        d = nm.d
        c = nm.c
    }
    printArray(a, n)
}

fun getNextMove(x: Int, y: Int, d: DIRECTION, a: Array<Array<Int>>, c: Int): NextMove {

    when (d) {
        RIGHT -> if (y < c)
            return NextMove(RIGHT, x, y + 1, c)
        else
            return NextMove(DOWN, x + 1, y, c)
        DOWN -> if (x < c)
            return NextMove(DOWN, x + 1, y, c)
        else
            return NextMove(LEFT, x, y - 1, c)
        LEFT -> if (y >= a.size - c)
            return NextMove(LEFT, x, y - 1, c)
        else
            return NextMove(UP, x - 1, y, c)
        UP -> if (x > a.size - c)
            return NextMove(UP, x - 1, y, c)
        else {
            return NextMove(RIGHT, x, y + 1, c - 1)
        }
    }
}

fun printArray(a: Array<Array<Int>>, n: Int) {
    for (row in 0 until n) {
        for (col in 0 until n)
            print("${a[row][col]}\t")
        println("")
    }
}


data class NextMove(val d: DIRECTION, val x: Int, val y: Int, val c: Int)

enum class DIRECTION {
    LEFT, RIGHT, UP, DOWN
}

