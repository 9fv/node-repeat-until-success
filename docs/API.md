# node-repeat-until-success: API Reference

## Constants

<dl>
<dt><a href="#defaultLogger">defaultLogger</a> : <code>object</code></dt>
<dd><p>A default (very) simple logger based on {console} object.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#repeatUntilSuccess">repeatUntilSuccess(fn, delay, timeout, logger)</a></dt>
<dd><p>Repeat a promise function until it succeeds.</p>
</dd>
</dl>

<a name="defaultLogger"></a>

## defaultLogger : <code>object</code>
A default (very) simple logger based on {console} object.

**Kind**: global constant  
<a name="repeatUntilSuccess"></a>

## repeatUntilSuccess(fn, delay, timeout, logger)
Repeat a promise function until it succeeds.

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | The function to repeat. |
| delay | <code>number</code> | <code>3000</code> | Delay (expressed in milliseconds) between each running. |
| timeout | <code>number</code> | <code>0</code> | Timeout (expressed in milliseconds) after which the process stops.                           Infinite if less than or equal to zero. |
| logger | <code>object</code> |  | A logger. |


## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
