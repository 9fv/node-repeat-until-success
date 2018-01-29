# node-repeat-until-success: API Reference

## Classes

<dl>
<dt><a href="#RepeatTaskUntilSuccess">RepeatTaskUntilSuccess</a></dt>
<dd><p>Repeat a task until it succeeds.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#defaultLogger">defaultLogger</a> : <code>object</code></dt>
<dd><p>A default (very) simple logger based on {console} object.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#repeatUntilSuccessFactory">repeatUntilSuccessFactory(fn, delay)</a> ⇒ <code><a href="#RepeatTaskUntilSuccess">RepeatTaskUntilSuccess</a></code></dt>
<dd><p>Repeat a promise function until it succeeds.</p>
</dd>
</dl>

<a name="RepeatTaskUntilSuccess"></a>

## RepeatTaskUntilSuccess
Repeat a task until it succeeds.

**Kind**: global class  
**Access**: public  

* [RepeatTaskUntilSuccess](#RepeatTaskUntilSuccess)
    * [new RepeatTaskUntilSuccess(task, args)](#new_RepeatTaskUntilSuccess_new)
    * [.logger(logger)](#RepeatTaskUntilSuccess+logger) ⇒ [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)
    * [.delay(delay)](#RepeatTaskUntilSuccess+delay) ⇒ [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)
    * [.timeout(timeout)](#RepeatTaskUntilSuccess+timeout) ⇒ [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)
    * [.run()](#RepeatTaskUntilSuccess+run) ⇒ <code>Promise</code>

<a name="new_RepeatTaskUntilSuccess_new"></a>

### new RepeatTaskUntilSuccess(task, args)

| Param | Type | Description |
| --- | --- | --- |
| task | <code>function</code> | The task to run must be a function returning a promise (or an async function). |
| args | <code>array</code> | Arguments to pass when calling function. |

<a name="RepeatTaskUntilSuccess+logger"></a>

### repeatTaskUntilSuccess.logger(logger) ⇒ [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)
Set a logger.
 * If provided value is null, no logging processed.
 * If provided value is a string equals to 'default', use the default logger based on console.

**Kind**: instance method of [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)  

| Param | Type | Description |
| --- | --- | --- |
| logger | <code>null</code> \| <code>string</code> \| <code>object</code> | The logger. |

<a name="RepeatTaskUntilSuccess+delay"></a>

### repeatTaskUntilSuccess.delay(delay) ⇒ [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)
Set a delay between each runnning (expressed in milliseconds).

**Kind**: instance method of [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>number</code> | The delay (in milliseconds). |

<a name="RepeatTaskUntilSuccess+timeout"></a>

### repeatTaskUntilSuccess.timeout(timeout) ⇒ [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)
Set a timeout after which the process stops (expressed in milliseconds).

**Kind**: instance method of [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)  

| Param | Type | Description |
| --- | --- | --- |
| timeout | <code>number</code> | The timeout (in milliseconds). |

<a name="RepeatTaskUntilSuccess+run"></a>

### repeatTaskUntilSuccess.run() ⇒ <code>Promise</code>
Run the task then repeat while it succeeds or timeout is reached.

**Kind**: instance method of [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)  
<a name="defaultLogger"></a>

## defaultLogger : <code>object</code>
A default (very) simple logger based on {console} object.

**Kind**: global constant  
<a name="repeatUntilSuccessFactory"></a>

## repeatUntilSuccessFactory(fn, delay) ⇒ [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess)
Repeat a promise function until it succeeds.

**Kind**: global function  
**Returns**: [<code>RepeatTaskUntilSuccess</code>](#RepeatTaskUntilSuccess) - - An instance of {RepeatTaskUntilSuccess}.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to repeat. |
| delay | <code>number</code> | Delay (expressed in milliseconds) between each running. |


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
