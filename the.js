function glc(a) {
    "use strict";
    var start = Date.now();
    var end;
    var test_input = function (b) { // test input array validity
        var output = false;
        var i = 0;
        var not_positive_int = false;
        var invalid_input = function (a) {
            return (a <= 0 || a % 1 !== 0 || a > 1e6);
        };
        if (b !== undefined) {
            if (b.constructor === Array) {
                if (b.length > 1) {
                    if (b.length <= 20) { // maximum array length is 20
                        while (i < b.length) {
                            if (invalid_input(b[i])) {
                                not_positive_int = true;
                                break;
                            }
                            i += 1;
                        }
                        if (!not_positive_int) {
                            output = true;
                        }
                    }
                }
            }
        }
        return output;
    };

    var gl_calc = function (a) { // GCF & LCM CALCULATION
        var is_prime = function (g) { // prime checker
            var limit;
            var mod = 2;
            var output = true;
            if (g >= 2 && g % 1 === 0) {
                limit = Math.floor(Math.sqrt(g));
                while (mod <= limit) {
                    if (g % mod === 0) {
                        output = false;
                        break;
                    }
                    mod += 1;
                }
            } else {
                output = false;
            }
            return output;
        };

        var arr = a.slice().sort().reverse(); // input array is sorted downward (high → low)
        var max = Math.floor(Math.sqrt(arr[0])); // limit for loop
        var gcf = [];
        var lcm = [];
        var divisor = 2;
        var buffer = arr.slice(); // division result
        var chk_div;

        var check_divisor = function (flag) {
            var can_be_divided = 0;
            var output = false;
            buffer.forEach(function (v, i) { // find out whether each element can be divided or not
                if ((v / divisor) % 1 === 0) {
                    if (flag) {
                        buffer[i] = v / divisor; // update buffer array
                    }
                    can_be_divided += 1;
                    output = true;
                }
            });
            return [output, can_be_divided];
        };

        var gen_divisor = function () {
            if (!check_divisor(false)[0]) { // false → check current divisor WITHOUT updating buffer array
                do {
                    divisor += 1; // increment divisor
                } while (!is_prime(divisor) && divisor <= max);
            }
        };

        var gen_check_divisor = function () {
            gen_divisor(); // generate a prime number as current divisor
            chk_div = check_divisor(true); // true → check current divisor AND update buffer array
            if (chk_div[0] === true) { // true as chk_div[0] → at least one element can be divided
                if (chk_div[1] > 0) {
                    lcm.push(divisor);
                }
                if (chk_div[1] === buffer.length) { // chk_div[1] → can_be_divided (ALL can be divided)
                    gcf.push(divisor);
                }
            }
        };

        var division_complete = function () { // check if array has only integer 1 for each element
            var c = 0;
            buffer.forEach(function (v) {
                c += v;
            });
            return (c === buffer.length);
        };

        // ----------------------------------------- //
        do { // MAIN LOOP                            //
            gen_check_divisor();                     //
        } while (!division_complete(buffer));        //
        // ----------------------------------------- //

        var add_one = function (a) { // 1
            if (!a.length) {
                a.push(1);
            } else {
                a.unshift(1);
            }
            return a;
        };

        var mul = function (a) { // multiplications of array elements
            var mult = 1;
            a.forEach(function (v) {
                mult *= v;
            });
            return mult;
        };

        return { // FINAL RESULT
            input: a,
            output: {
                gcf_array: add_one(gcf),
                lcm_array: add_one(lcm),
                gcf: mul(gcf),
                lcm: mul(lcm)
            }
        };
    };

    var gl_result = "Error: invalid input → must be array of positive integers → max each 1,000,000 (one million)";
    if (test_input(a)) {
        gl_result = gl_calc(a); // RUN CALCULATION
    }
    if (gl_result.constructor === Object) {
        end = Date.now();
        gl_result.duration = (end - start) + " ms";
    }
    return gl_result;
}
