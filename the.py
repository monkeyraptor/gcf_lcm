def glc(a):
    from datetime import datetime
    import math
    start = datetime.now()
    # -----------------------
    def is_prime(g):
        mod = 2
        output = True
        try:
            if (g >= 2 and g % 1 == 0):
                limit = int(math.sqrt(g))
                while (mod <= limit):
                    if (g % mod == 0):
                        output = False
                        break
                    mod += 1
            else:
                output = False
        except:
            output = False
        return output
    # -----------------------
    def test_input(b):
        output = False
        i = 0
        not_positive_int = False
        # -----------------------
        def invalid_input(a):
            return (a < 0 or a % 1 != 0 or a > 1e6)
        # -----------------------
        if isinstance(b, list):
            if len(b) > 1:
                if len(b) <= 20:
                    while (i < len(b)):
                        if (invalid_input(b[i])):
                            not_positive_int = True
                            break
                        i += 1
                    if not not_positive_int:
                        output = True
        return output
    # -----------------------
    def gl_calc(a):
        arr = a[:]
        arr.sort()
        arr = list(reversed(arr))
        gcf = []
        lcm = []
        divisor = 2
        buffer = arr[:]
        # -----------------------
        def check_divisor(flag):
            can_be_divided = 0
            output = False
            for i, v in enumerate(buffer):
                if (v / float(divisor)) % 1 == 0:
                    can_be_divided += 1
                    output = True
                    if (flag is True):
                        buffer[i] = int(v / float(divisor))
            return [output, can_be_divided]
        # -----------------------
        def division_complete():
            c = 0;
            for v in buffer:
                c += v
            return (c == len(buffer))
        # -----------------------
        while True: # Outer loop
            if not check_divisor(False)[0]:
                while True: # Inner loop
                    divisor += 1
                    if is_prime(divisor): # Inner loop limit
                        break
            chk_div = check_divisor(True)
            if (chk_div[0] is True):
                if (chk_div[1] > 0):
                    lcm.append(divisor)
                if (chk_div[1] == len(buffer)):
                    gcf.append(divisor)
            if division_complete(): # Outer loop limit
                break
            # -----------------------
        def add_one(a):
            if len(a) == 0:
                a.append(1)
            else:
                a.insert(0, 1)
            return a
        # -----------------------
        def mul(a):
            mult = 1
            for v in a:
                if v is not None:
                    mult *= v
            return mult
        # -----------------------
        return {
            "input": a,
            "output": {
                "gcf_array": add_one(gcf),
                "lcm_array": add_one(lcm),
                "gcf": mul(gcf),
                "lcm": mul(lcm)
            }
        }
        # -----------------------
    gl_result = "Error: invalid input"
    if (test_input(a)):
        gl_result = gl_calc(a)
        if isinstance(gl_result, dict):
            end = datetime.now()
            tt = end - start
            tt = int(tt.seconds) + int(tt.microseconds / 1000)
            gl_result["duration"] = str(tt) + " ms"
            # -----------------------
    return gl_result
