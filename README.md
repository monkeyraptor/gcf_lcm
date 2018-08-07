# glc.js
JavaScript function to get GCF (greatest common factor) and LCM (least common multiple)

## Usage
> `glc([list_of_positive_integers])`

> Example: `glc([8, 16, 18])`

## Input
> This function receives only an array of **positive integers** from `2` to `1,000,000` (1 million).

> The array length is limited to `20`

> It only receives one argument (input).

## Output 
> For **valid** input, the output will be an `object`.

> The `object` consists of:
```
{
    duration: "process in milliseconds",
    input: [your_input_array],
    output: {
        gcf_array: [GCF_LIST],
        gcf: integer_multiplication_from_GCF_LIST,
        lcm_array: [LCM_LIST],
        lcm: integer_multiplication_from_LCM_LIST
}
```

## Examples
### VALID INPUT
> `glc([8, 16, 18])` → input is `[8, 16, 18]` → **valid** input

> Output (`object`):

```
{
    duration: "1 ms",
    input: [8, 16, 18],
    output: {
        gcf: 2,
        gcf_array: [1, 2],        
        lcm: 144,
        lcm_array: [1, 2, 2, 2, 2, 3, 3]
}
```
### INVALID INPUT
> `gfm(4)` → input is `4` → **invalid** input

> Output (`string`):

```
Error: invalid input → must be array of positive integers → max each 1,000,000 (one million)
```

## BASED ON CONTINUOUS DIVISION
> More info on <a href="http://monkeyraptor.johanpaul.net/2018/08/math-finding-gcf-and-lcm-using.html" target="_blank">Monkey Raptor</a>
