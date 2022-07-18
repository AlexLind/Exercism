// @ts-check

import { isNullOrUndefined, isUndefined } from "util"

// import { values } from "core-js/core/array"

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
let array1Num = +array1.join("")
let array2Num = +array2.join("")
return array1Num + array2Num
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueString = String(value)
  let valueStringArray = valueString.split('')
  let valueStringArrayReverse = valueStringArray.reverse()
  let valueStringReverse = valueStringArrayReverse.join('')
  if (valueString === valueStringReverse) {
    return true
  }
  return false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if (!input) {
    return 'Required field'
  } else if (isNaN(input) || input === '0') {
    return 'Must be a number besides 0'
  } else {
    return ''
}}
