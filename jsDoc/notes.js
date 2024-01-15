/**
 *
 * this is a SIMPLE function that times the num by 2
 *
 * @param {number} num ::: the input type is a num
 * @throws {TypeError} ::: if the input is not a valid number
 * @returns {number} return the inputted value times by 2
 */
const times_2 = (num) => {
  if (isNaN(num)) throw new TypeError(`${num} is not a valid number`);
  return Number(num) * 2;
};

// @type
/**
 * An Object that representing a point in 2D space
 * @typedef {Object} Point
 * @property {number} x - the x-coordinate of the point
 * @property {number} y - the y-coordinate of the point
 */

/**
 * Finding the distance between two points
 * @function
 * @param {Point} first_point - first point
 * @param {Point} second_point - second point
 * @returns {number} - the distance between two points
 */

// @typedef : Defines a custom type for use in JSDoc documentation

const get_distance_between_two_points = (first_point, second_point) => {
  const dx = second_point.x - first_point.x;
  const dy = second_point.y - first_point.y;
  return Math.sqrt(dx * dx + dy * dy);
};

// Rectangle
/**
 * a rectangle Object
 * @typedef {Object} Rectangle
 * @property {number} width
 * @property {number} length
 */

/**
 * a function that find the area of the given rectangle
 * @param {Rectangle} rect
 * @returns {number}
 */

const rectangle_area = (rect) => {
  return rect.width * rect.length;
};

// @callback : describes a callback function used as a parameter
/**
 * @callback get_products_callback
 * @param {Array<string>} products - An array of product
 * @param {string|null} error - an error message, or null if there is no error
 */

/**
 * get all products
 * @param {get_products_callback} callback - a function to call when the products aare retrieved
 */

const get_products = (callback) => {
  // logic to get hte products
  const products = ["tomatoes", "apple", "pear", "orange"];
  // logic to get hte products

  // if error occured
  const error = null;
  // if error occured

  callback(products, error);
};

// @enum : describes an enumerated type

/**
 * Enumeration of order statuses
 * @readonly
 * @enum {string}
 */
const OrderStatus = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};
const current_status = OrderStatus.PENDING;
console.log("Food deliveries current status : ", current_status);

// @see : Provides a referennce to another related piece of documentation

/**
 * Calculate the sum of the given array of nums
 * @param {Array<number>} nums
 * @returns {number}
 *
 * @see {@link https://developer.mozilla.org/en-US/}
 */

const sum_func = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
  }
  return sum;
};

// @example : Provieds an example of how to use a function or method
// @author : Specifies the author of a piece of code
// @since : Specifies the version of the code that inroduced a piece of code

/**
 * Calculates the average of the given array of nums
 * @param {number[]} nums
 * @returns {number}
 *
 * @example
 * const nums = [5,2,12,4,2,3,4,10,9,8]
 * const the_avg = calc_avg(nums);
 * console.log("the average num is : ", the_avg)
 *
 * @author Hello World <hello_world@gmail.com>
 * @since 1.0.0
 */

const calc_avg = (nums) => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length;
};

const nums = [5, 2, 12, 4, 2, 3, 4, 10, 9, 8];
const the_avg = calc_avg(nums);
console.log("the average num is : ", the_avg);

// @depracated : Indicates that a piece of code is no longer recommended for use and will be removed in the future

/**
 * @deprecated Use the "calc_total_with_discount" function instead.
 * @since 1.5.0 - IS DEPRECATED
 * @param {number} subtotal - the subtotal of the price
 * @param {number} discount - discount in decimal/float
 */
const calc_total = (subtotal, discount) => {};

/**
 * Calculates the total with discount applied
 *
 * @param {number} subtotal - The subtotal of the items.
 * @param {number} discount - in the decimal/float.
 * @returns {number} -> the total with discount applied
 */
const calc_total_with_discount = (subtotal, discount) => {
  return subtotal - subtotal * discount;
};
