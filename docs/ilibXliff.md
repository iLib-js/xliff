## Functions

<dl>
<dt><a href="#clone">clone()</a> ⇒ <code>TranslationUnit</code></dt>
<dd><p>Clone the current unit and return the clone.</p>
</dd>
<dt><a href="#getTranslationUnits">getTranslationUnits()</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Get the translation units in this xliff.</p>
</dd>
<dt><a href="#addTranslationUnits">addTranslationUnits(files)</a></dt>
<dd><p>Add translation units to this xliff.</p>
</dd>
<dt><a href="#size">size()</a> ⇒ <code>number</code></dt>
<dd><p>Return the number of translation units in this xliff file.</p>
</dd>
<dt><a href="#toString1">toString1()</a> ⇒ <code>String</code></dt>
<dd><p>Serialize this xliff instance as an xliff 1.2 string.</p>
</dd>
<dt><a href="#toString2">toString2()</a> ⇒ <code>String</code></dt>
<dd><p>Serialize this xliff instance as an xliff 2.0 string.</p>
</dd>
<dt><a href="#toStringCustom">toStringCustom()</a> ⇒ <code>String</code></dt>
<dd><p>Serialize this xliff instance as an customized xliff 2.0 format string.</p>
</dd>
<dt><a href="#serialize">serialize(untranslated)</a> ⇒ <code>String</code></dt>
<dd><p>Serialize this xliff instance to a string that contains
the xliff format xml text.</p>
</dd>
<dt><a href="#deserialize">deserialize(xml)</a></dt>
<dd><p>Deserialize the given string as an xml file in xliff format
into this xliff instance. If there are any existing translation
units already in this instance, they will be removed first.</p>
</dd>
<dt><a href="#getVersion">getVersion()</a> ⇒ <code>String</code></dt>
<dd><p>Return the version of this xliff file. If you deserialize a string into this
instance of Xliff, the version will be reset to whatever is found inside of
the xliff file.</p>
</dd>
</dl>

<a name="clone"></a>

## clone() ⇒ <code>TranslationUnit</code>
Clone the current unit and return the clone.

**Kind**: global function  
**Returns**: <code>TranslationUnit</code> - a clone of the current unit.  

* * *

<a name="getTranslationUnits"></a>

## getTranslationUnits() ⇒ <code>Array.&lt;Object&gt;</code>
Get the translation units in this xliff.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - the translation units in this xliff  

* * *

<a name="addTranslationUnits"></a>

## addTranslationUnits(files)
Add translation units to this xliff.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;Object&gt;</code> | the translation units to add to this xliff |


* * *

<a name="size"></a>

## size() ⇒ <code>number</code>
Return the number of translation units in this xliff file.

**Kind**: global function  
**Returns**: <code>number</code> - the number of translation units in this xliff file  

* * *

<a name="toString1"></a>

## toString1() ⇒ <code>String</code>
Serialize this xliff instance as an xliff 1.2 string.

**Kind**: global function  
**Returns**: <code>String</code> - the current instance encoded as an xliff 1.2
format string  

* * *

<a name="toString2"></a>

## toString2() ⇒ <code>String</code>
Serialize this xliff instance as an xliff 2.0 string.

**Kind**: global function  
**Returns**: <code>String</code> - the current instance encoded as an xliff 2.0
format string  

* * *

<a name="toStringCustom"></a>

## toStringCustom() ⇒ <code>String</code>
Serialize this xliff instance as an customized xliff 2.0 format string.

**Kind**: global function  
**Returns**: <code>String</code> - the current instance encoded as an customized xliff 2.0
format string  

* * *

<a name="serialize"></a>

## serialize(untranslated) ⇒ <code>String</code>
Serialize this xliff instance to a string that contains
the xliff format xml text.

**Kind**: global function  
**Returns**: <code>String</code> - the current instance encoded as an xliff format
xml text  

| Param | Type | Description |
| --- | --- | --- |
| untranslated | <code>boolean</code> | if true, add the untranslated resources to the xliff file without target tags. Otherwiwe, untranslated resources are skipped. |


* * *

<a name="deserialize"></a>

## deserialize(xml)
Deserialize the given string as an xml file in xliff format
into this xliff instance. If there are any existing translation
units already in this instance, they will be removed first.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| xml | <code>String</code> | the xliff format text to parse |


* * *

<a name="getVersion"></a>

## getVersion() ⇒ <code>String</code>
Return the version of this xliff file. If you deserialize a string into this
instance of Xliff, the version will be reset to whatever is found inside of
the xliff file.

**Kind**: global function  
**Returns**: <code>String</code> - the version of this xliff  

* * *

