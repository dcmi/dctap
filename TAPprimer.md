# DCMI Application Profile

**Date:**
November 27, 2020

**Status:**
Draft - Request for Comments

**Editors:**
Karen Coyle

**Contributors**<br />
Tom Baker, DCMI<br />
Phil Barker<br />
John Huck, University of Alberta<br />
Ben Riesenberg, University of Washington<br />
Nishad Thalhath


## Introduction to the Working Group Report
The Dublin Core Metadata Terms ([DCMIT](#dcmit)) were early pioneers in the era of open vocabulary reuse. Contrasted to vocabularies that are only for a local use, open vocabularies provide terms that can be used across disparate applications, making sharing among metadata communities possible. DCMI terms are among the most frequently used vocabulary terms in shared metadata, often used in combination with terms from other vocabularies. 

By its nature, the creation of a new metadata scheme from available open vocabularies creates what can be called an "application profile." (Also commonly called a "metadata application profile.") Application profiles provide the rules that govern the creation and reuse of metadata instances. Their function is both to *explain* the metadata but also to potentially *constrain* the metadata so that correct usage can be determined. A single profile can serve a variety of needs: metadata creation support, metadata validation, metadata exchange, metadata selection, and mapping between metadata from different sources. Application profiles need to be sharable so that data exchange between communities of practice can take place. There is, however, no current standard for the creation of application profiles such that they could be understood outside of the community within which they have been developed. 

The goal of this DCMI project is to create a standard format for a basic set of application profile functions. To be sure, application profiles can be quite complex and the range of use cases is broad. This present effort does not attempt to address all possible use cases, but in the same spirit of the Dublin Core Metadata Terms hopes to provide a basic set of functions that can be extended as needed. For more detailed and complex approaches, the validation languages [ShEx](https://shex.io) and [SHACL](https://www.w3.org/TR/shacl/) provide full functionality.

It is our observation that a commonly used format used to express profiles is tabular, that is, tables with columns for data elements and the primary constraints of data type and cardinality. For that reason we have modeled our application profile description as a tabular file with an assumed underlying format of comma separated values ([CSV](https://tools.ietf.org/html/rfc4180)). This does not mean that profile development is limited to tabular data whose underlying data format is CSV; the data elements provided here can be expressed in other formats. It is also important to note that this model defines only the application profile and is silent on the data format of the instance data that the profile constrains.

In creating this first version of the application profile we assumed that the profile would be describing and constraining instance data that is formated as RDF. For purely practical purposes we felt that this would be the most useful for the community served by DCMI. A subsequent step could include testing this approach for non-RDF data if there is an interest in that.

## Goals
The task group has been guided by these goals:
* Our outcome should support the creation of a simple profile of describing entities and property/value pairs
* That the profile can be rendered in a table or spreadsheet
* That the profile can express basic constraints (such as cardinality and value types)
* It will be designed (initially) to profile RDF instance data
* It can be transformed into a schema or program that can be used to validate instance metadata

# DC Tabular Application Profile (TAP) Primer
## Profile overview

The purpose of a profile is to define and constrain the property/value pairs describing a resource in instance metadata. These instance data pairs are statements about some thing that the metadata describes, and may be grouped into distinct graphs describing a particular resource. For example, in metadata that describes books and their authors, books and authors are each resources with their respective descriptive statements; in metadata for college courses there could be graphs for courses, professors, and students. The profile provides rules governing the creation and use of the metadata, listing properties, their cardinality, valid value types, and giving labels and notes to aid the reader of the profile.

Only the columns for profile elements that are needed must be included in the profile and only the propertyID is required. The order of the columns is not significant; they are identified by their column headers. 

One of the main goals of this work is to allow metadata developers to create very simple application profiles, with the possibility to expand the profile as needed to accommodate more detail. There is, however, a limit to what can be accomplished with this simple profile vocabulary and it is not intended to place any limitations on extension or reuse. 
## Properties
The simplest profile is a list of properties that will be considered valid in your metadata. A property must be one that has been defined previously in a vocabulary, preferably with an IRI to identify it. Examples of properties are http://purl.org/dc/terms/title and http://xmlns.com/foaf/spec/#term_familyName. Property IRIs are usually shortened using defined prefixes (see [Prefixes](#prefixes), below), such that these would be rendered as dct:title and foaf:familyName.

The properties are the only elements of the profile that are required. In essence, a profile is based on a list of properties that define the metadata that is being targeted by the profile.  A profile that defines only its propertyIDs has an assumed but undefined RDF node as its subject and an assumed but undefined RDF node type as its object.

### Property identifier
***Element:*** <code>propertyID</code> 

The property ID must be the identifier of a vocabulary term that is defined elsewhere. It is mandatory and not repeatable.


**In table format:**
|propertyID|
|----|
|dct:creator
|dct:title
|dct:publisher
|dct:date


### Property label

***Element:*** <code>propertyLabel</code>

Identifiers are often not human-friendly, so the table includes a column for a label for the property that can be viewed in the table or displayed by applications that use the profile.

The property label is a human-facing label for the element that can be used in documentation and displays. Labels are optional but highly recommended so that displays are human-friendly. 

**Table format:**
|propertyID|propertyLabel|
|----|----
|dct:creator|Author
|dct:title|Book title
|dct:publisher|Publisher
|dct:date|Publication date


### Property note

***Element:*** <code>Note</code>

In many cases it would be desirable to include some explanatory information for the users of the profile, such as a definition of the property or any other information or instructions that are needed to help users of the profile understand its usage.


**Table format:**
|propertyID|propertyLabel|note|
|----|----|----|
|dct:creator|Author|Each author is given in a separate statement
|dct:title|Book title|The title and subtitle of the book|
|dct:publisher|Publisher|The name of the publisher or imprint from the title page|
|dct:date|Publication date|Publication date of books is generally a four-digit year



### Property cardinality

**Element**: <code>Mandatory</code><br />
**Element**: <code>Repeatable</code>

In many metadata designs some fields are required while others are not, and some fields are repeatable while others are not. This can be included in the simple profile using the columns "Mandatory" and "Repeatable".  The columns `mandatory` and `repeatable` take Boolean values. Boolean values are a pair of values representing either *true* or *false*. The XML Schema standard (link) gives these two possible sets of values:

* true/false
* 1/0

These values are commonly known and will be recognized by many programming languages and routines. Using the numbers 1 and 0 avoids requiring users to conform to the English language terms of "true" and "false". However, many persons not familiar with this use of 1 and 0 may not find these values natural. There is no reason not to use other binary values like "yes|no" or the equivalent in the language of the profile creators and users as long as the values chosen are documented for downstream users.

Either or both of the elements can be included in the profile, as needed. In the absence of these cardinality constraints, applications using this profile will need to assume default values of their own choosing. It is recommended to indicate these requirements in the profile to avoid misunderstandings about the nature of the metadata.

**Table format:**

|propertyID|propertyLabel|mandatory|repeatable|
|----|----|----|----|
|dct:creator|Author|false|true|
|dct:date|Publication date|true|false|
|dct:extent|Pages|false|false


### Property value types

In the metadata instance data, each property has a value. These values can be undeclared and therefore not subject to validation, or they can be defined in the profile, which then makes possible checking of the metadata value instances for validity. 

For RDF data there are two inter-related value types: the type of the RDF object node (IRI, blank node, or literal) and the more specific type of the literal value. Both of these are optional elements of the profile. However, if they are not included, applications that process the instance data may assume defaults. 

**Element:** <code>valueNodetype</code>

The value node type is the type of RDF node that is in the object position of the RDF triple. It can be IRI, blank node or literal. ([RDF Concepts](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-rdf-graph))

**Table format:**
|propertyID|propertyLabel|valueNodeType
|----|----|----|
|dct:creator|Author|IRI|
|dct:date|Publication date|literal|
|dct:extent|Pages|literal|


**Element:** <code>valueDatatype</code>

The value datatypes are literal datatypes, as defined in the RDF Concepts specification. ([RDF Concepts - Datatypes](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-Datatypes)) The majority of these datatypes are defined in the XML schema datatypes specification ([XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](http://www.w3.org/TR/xmlschema11-2/)). The list of datatypes there called "primitive" cover many of the most common metadata datatypes, including:
 string · boolean · decimal · float · double · duration · dateTime · time · date · gYearMonth · gYear · gMonthDay · gDay · gMonth · anyURI
 
These datatypes are valid for RDF nodes that are literals. They must be as defined in the RDF specification with the full IRI of http://www.w3.org/2001/XMLSchema or preceded by a prefix (often "xsd:") which defines them as members of the XML schema vocabulary.

**Table format:**
|propertyID|propertyLabel|valueNodeType|valueDatatype
|----|----|----|----|
|dct:creator|Author|IRI||
|dct:date|Publication date|literal|xsd:date|
|dct:extent|Pages|literal|xsd:decimal|


## Shapes

Up to this point we have described an application profile that is a single list of properties. By definition, a single list of metadata properties describes a single entity or thing. In practice, metadata often describes multiple things with relationships between them. A common example is bibliographic metadata which may separately describe books and authors, with the relationships between them. Another example is that of products, customers and invoices. Yet another defines the common entities in a learning environment: professors, students, courses. These are often expressed as rectangles in a data diagram: 

![](https://i.imgur.com/CYftbqf.jpg)

A group of properties that describe a single resource is called a *shape* in the TAP. A shape defines the structure that applications can expect to find in a view over a piece of data. In the application profile, instance data property graphs are gathered in shapes that have the a common subject focus. 

### Shape identifier & shape label

***Element:*** <code>shapeID</code><br />
***Element:*** <code>shapeLabel</code>

In RDF instance data, each shape is anchored with a single subject node that is an IRI or blank node. In the profile, any unique value in the <code>shapeID</code> column in the profile can identify a shape. For readability and to aid in creating useful displays for metadata developers and users, each shape may also have an eye-readable label.

Because there is often more than one property for a shape, and because there must be a template row for each property, repeating the shape identifier and label in the profile is optional. It is assumed that all property rows following a row that includes a shape identifier are properties within that shape.

Using the diagram above, we can code one of the shapes in our profile template:

**Table format:**
|shapeID|shapeLabel|propertyID|propertyLabel
|----|----|----|----|
|tutors|Tutor|foaf:mailbox|Email|
|||foaf:accountName|UserName|
|||sdo:accessCode|Password|
|||foaf:givenName|Firstname|
|||foaf:familyName|LastName|
|||sdo:gender|Gender|


Note that this table is equivalent to the one above although it repeats the shape ID and label on each row:

|shapeID|shapeLabel|propertyID|propertyLabel
|----|----|----|----|
|tutors|Tutor|foaf:mailbox|Email|
|tutors|Tutor|foaf:accountName|UserName|
|tutors|Tutor|sdo:accessCode|Password|
|tutors|Tutor|foaf:givenName|Firstname|
|tutors|Tutor|foaf:familyName|LastName|
|tutors|Tutor|sdo:gender|Gender|

### Value shape

***Element:*** <code>valueShape</code>

The value of a property can be a shape. In the example above with tutors, students and courses, the course shape has a property <code>sdo:instructor</code> that has the tutor shape as a value.

|shapeID|shapeLabel|propertyID|propertyLabel|valueShape
|----|----|----|----|----|
|courses|Course|dct:title|Course name||
|||dct:description|Course description||
|||sdo:instructor|Tutor|tutors|
|tutors|Tutor|foaf:mailbox|Email||
|||foaf:accountName|UserName||

The string in the <code>valueShape</code> column must match exactly and uniquely the content of a shapeID. A row with a valueShape may also include cardinality constraints which define the requirements of the relationship between the "calling" and the "called" shapes.

|shapeID|shapeLabel|propertyID|propertyLabel|valueShape|mandatory|repeatable
|----|----|----|----|----|----|----|
|courses|Course|dct:title|Course name||y|n|
|||dct:description|Course description||y|n|
|||sdo:instructor|Tutor|tutors|y|y|
|tutors|Tutor|foaf:mailbox|Email||y|n|
|||foaf:accountName|UserName||y|n

## Value constraint

<code>valueConstraint</code><br />

This further constrains the value that has been defined by the property, the valueNodeType and valueDataType. This must have a specific value such as a literal or an IRI.

| Property    | valueNodeType | valueDataType | valueConstraint                                   |
| ----------- | ------------- | ------------- | ------------------------------------------------- |
| rdf:type    | IRI           |               | sdo:ComicIssue                                    |
| dct:subject | IRI           |               | http://id.loc.gov/authorities/subjects/sh85141948 |
| dct:subject | LITERAL       | xsd:string    | Vampires                                          |


*In progress*

Additional rules for values that are not simple strings have not yet been defined by the working group.

## Value constraint type

To allow for a wider range of value constraints beyond specific values, it will be necessary to give a value constraint type that will allow the value constraint to be interpreted. 

Values in valueConstraint can be single values or a list of delimited values. The valueConstraintType defines all values in the valueConstraint cell, whether a single value or a list. Multiple values in the valueConstraint cell are processed in a logical "or" relation. Thus the string:
`A, B, C`
is processed as 
`A` or `B` or `C` 
The pre-defined valueConstraintTypes: picklist, IRIstem, pattern (regex), languageTag. Other types of valueConstraintTypes are allowed, including code snippets (e.g. ShEx statements). When using a valueConstraintType that is not one of the pre-defined types it may be necessary to convey the meaning of the type to downstream users of the profile.
When the constraint is a list of string values (red, blue, green) the valueConstraintType is `picklist`. 
When the constraint is a single string value, no valueConstraintType is used. This latter indicates that the valueConstraint is treated as a single string regardless of possible delimiter characters (such as the comma) embedded within the string.
3. The documentation will state that 

### Single string value:

| propertyID | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | Smith, Jane | |

### List of string values:

| propertyID | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | History,Science,Art |picklist |

### Constraint type defined in statement constraints

| shapeID | propertyID | valueNodeType | valueConstraint |valueConstraintType |
| ---- | ---- | ---- | ---- | ---|
| author | rdf:type | IRI | foaf:Person | |

### One or more IRI stems

| propertyID |  valueNodeType | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- | ---- |
| dct:subject | IRI |  | http://id.loc.gov, http://vocab.getty.edu | IRIstem |

### regex

| propertyID |  valueNodeType | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- | ---- |
| schema:typicalAgeRange |  literal | xsd:string |  /^[0-9]{1,2}-?[0-9]{0,2}$/ | pattern |

### language tags

| propertyID | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | @en,@fr,@de  | languageTag |

*Noted but not yet resolved*

* upper and lower ranges on numerical values, such as dates, prices or ages
* year less than 2021; age greater than 2 but less than 15; price less than $200


# Appendices

## Explainer and constrainer

The application profile template can be thought of as having three functions: structure, explainer, and constrainer. Viewed as a whole, these functions look like:

![](https://i.imgur.com/Uv9zh7z.png)
![](https://i.imgur.com/A3WR7p4.png)

When developing a profile one can think: "What will explain my metadata to others?" and "What constraints do I put on my metadata?"

## Tables and the CSV format

The tabular application profile format will normally be viewed as a table or spreadsheet. For use in programs, the table is assumed to be stored as comma-delimited values, or CSV.  Many programming languages have functions to accept CSV as an input format. Here is an example of a small profile in both table and CSV formats:

**Table format**

|shapeID|shapeLabel|propertyID|propertyLabel|valueShape
|----|----|----|----|----|
|courses|Course|dct:title|Course name||
|||dct:description|Course description||
|||sdo:instructor|Tutor|tutors|
|tutors|Tutor|foaf:mailbox|Email||
|||foaf:accountName|UserName||

Note that CSV is not the only possible format; tables can often be saved in other tabular formats such as tab-delimited values. The DCMI Application Profile tabular format is designed to be compatible with the CSV standard (https://tools.ietf.org/html/rfc4180) but is not limited to that. 

## Multiple options in a cell

There are various situations where one may want to have multiple values in a cell that represent a choice of values, such as:

valueNodeType = IRI or BNODE
valueConstraint = red or blue or green 
valueType = xsd:string or rdf:langString

Multiple value options in a single cell need to be delimited to distinguish them from a single value. Both the comma and the pipe character ("|") are commonly used delimiters that are highly visible within a string, but other characters may be used, with the caveat that the meaning of the characters used may need to be communicated to downstream users of the tabular profile. Note that comma characters are a special case in a CSV file, and commas used as multiple value delimiters need to escaped so that they are not confused with commas that separate columns. The CSV specification (https://tools.ietf.org/html/rfc4180) describes how to do this. However, most user-facing tools that are used to edit CSV files, such as spreadsheets, handle this more or less transparently, as do many code libraries for processing CSV files programatically, therefore it often is not necessary to escape the commas when using a table or spreadsheet program. 

Multiple options in a cell are processed in a logical "or" relation. Thus the cell with contents:

`A|B|C`

or

`A,B,C`

is processed as:

 `A` or `B` or `C` 

In metadata creation applications this is often referred to as a "picklist".

Examples:

| propertyID | valueDatatype | valueConstraint |
| ---- | ---- | ---- | 
| dct:subject | xsd:string | European History&#124;Science&#124;Fine Arts | 

| propertyID | valueDatatype | valueConstraint |
| ---- | ---- | ---- | 
| dct:subject | xsd:string | European History, Science, Fine Arts | 

## Unresolved issues

### <a id="profiles">Namespace declarations</a>

At the very least, property identifiers and value types will be IRI-identified names. To avoid overly long and hard to read strings, these may be shortened using a stated prefix:

@prefix dc: <http://purl.org/dc/elements/1.1/> . <br />
@prefix sdo: <https://schema.org/> . <br />
@prefix foaf: <http://xmlns.com/foaf/> . <br />

|shapeID|shapeLabel|propertyID|propertyLabel
|----|----|----|----|
|tutors|Tutor|foaf:mailbox|Email|
|||foaf:accountName|UserName|
|||sdo:accessCode|Password|
|||foaf:givenName|Firstname|
|||foaf:familyName|LastName|
|||sdo:gender|Gender|

However, we could not find a place for the namespace declarations in the profile tabular format itself. We now assume that namespace declarations, and perhaps some administrative information, would be located in a separate file, perhaps following the recommendations of the W3C CSV on the Web working group. (https://www.w3.org/2013/csvw/wiki/Main_Page)

### Use of quotes in cells

Some implementations of tables or of CSV make use of double quotes to indicate that the value is a literal string. Whether or not quotes will be used may depend on the expectations of the applications that will ingest and use the profile. So far the DCMI application profile standard is silent on the use of quotes. However, this requirement possibly interacts with the need for multiple values, and will be re-visited with that discussion.

### Open/closed

In RDF, all graphs are open, meaning that they can be extended with new arcs and nodes representing new information. The purpose of many profiles will be to define a specific metadata set that is complete and excludes anything not included in the profile description. This needs to be defined in the profile. There are two questions:
1. where to define this - as a characteristic of the entire profile, or on individual shapes?
2. should there be a default?
