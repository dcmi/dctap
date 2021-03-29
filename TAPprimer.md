# DCMI Application Profile

**Date:**
March 26, 2021

**Status:**
Draft - Request for Comments

**Editors:**
Karen Coyle

**Contributors**<br />
Tom Baker, DCMI<br />
Phil Barker, Cetis LLP<br />
John Huck, University of Alberta<br />
Ben Riesenberg, University of Washington<br />
Nishad Thalhath

- [DC Tabular Application Profile (TAP) Primer](#dcmi-specification-for-tabular-application-profiles-tap-primer)
  * [Profile overview](#profile-overview)
  * [Properties](#properties)
    + [Property identifier](#property-identifier)
    + [Property label](#property-label)
    + [Property cardinality](#property-cardinality)
    + [Property value types](#property-value-types)
  * [Note](#note)
  * [Shapes](#shapes)
    + [Shape identifier & shape label](#shape-identifier-and-shape-label)
    + [Value shape](#value-shape)
  * [Additional value constraints](#additional-value-constraints)
    + [Value constraint](#value-constraint)
    + [Value constraint type](#value-constraint-type)
- [Appendices](#appendices)
  * [Tables and the CSV format](#tables-and-the-csv-format)
  * [Namespace declarations](#namespace-declarations)



# DCMI Specification for Tabular Application Profiles (TAP) Primer
## Profile overview

The creation of a new metadata scheme from available open vocabularies creates what can be called an application profile, which in this document is often shortened to "profile.” A profile is created to define and constrain the property/value pairs that are used in metadata to describe resources and to provide the rules that govern the creation and reuse of metadata. It may list properties, their cardinality, valid value types, and give labels and notes to aid the reader of the profile.The profile function is both to explain the metadata but also to potentially constrain the metadata so that correct usage can be determined. A single profile can serve a variety of needs: metadata creation support, metadata validation, metadata exchange, metadata selection, and mapping between metadata from different sources. 

Application profiles need to be sharable so that data exchange between communities of practice can take place. 
The DC TAP provides a vocabulary and a format for creating table-based application profiles. Each row in a TAP table or spreadsheet is a single metadata statement, and these statements may be grouped to form units, called "shapes", that describe a resource covered by the metadata. For example, in metadata that describes books and their authors, book and author can both be resources with their respective descriptive statements (title, name); in metadata for college courses there could be separate shapes for course, professor, and student course number, professor name, student ID). 

In the TAP, all of the columns are optional with the exception of the `propertyID`. The order of the columns is not significant as they are identified by their column headers.  The TAP allows one to create very simple profiles, but should also allow for extension where needed.

## Properties
The simplest profile is a list of properties that will be considered valid for use in your metadata. A property must be one that has been defined previously in a vocabulary, preferably with an IRI to identify it. Examples of properties are http://purl.org/dc/terms/title and http://xmlns.com/foaf/spec/#term_familyName. 

The `propertyID` is the only element of the profile that is required in a TAP. 

### Property identifier
***Element:*** <code>propertyID</code> 

The property ID must be the identifier of a vocabulary term that is defined elsewhere. It is mandatory.

|propertyID|
| ---- |
|https://schema.org/creator|
|http://purl.org/dc/terms/title|
|http://purl.org/dc/terms/date|

Note that for uses of IRIs for values in the TAP, it is commonplace to shorten them using a prefix or CURIE method. This is covered in more detail in the [Namespace Declarations](#namespace-declarations) section in the appendix. In the remainder of this document we will use shortened forms of these IRIs:

| prefix | IRI |
|----|----|
|sdo|https://schema.org/|
|dct|http://purl.org/dc/terms/|
|foaf|http://xmlns.com/foaf/|
|xsd|https://www.w3.org/TR/xmlschema11-2/|

### Property label

***Element:*** <code>propertyLabel</code>

The property label is a human-facing label for the element that can be used in documentation and displays. Labels are optional but highly recommended so that displays are human-friendly. 

|propertyID|propertyLabel|
|----|----|
|dct:creator|Author
|dct:title|Book title
|dct:publisher|Publisher
|dct:date|Publication date

### Property cardinality

**Element**: <code>mandatory</code><br />
**Element**: <code>repeatable</code>

In many metadata designs some fields are required while others are not, and some fields are repeatable while others are not. This can be included in the simple profile using the columns `mandatory` and `repeatable`.  These  are defined as taking only Boolean values. Boolean values are a pair of values representing either *true* or *false*. There are two standard sets of values defined for Boolean elements:

* true/false
* 1/0

These values are commonly known and will be recognized by many programming languages and routines. Using the numbers 1 and 0 avoids requiring users to conform to the English language terms of "true" and "false". However, many persons not familiar with this use of 1 and 0 may not find these values natural. There is no reason not to use other binary values like "yes|no" or the equivalent in the language of the profile creators and users as long as the values chosen are documented for downstream users.

Either or both of the elements can be included in the profile, as needed. In the absence of these cardinality constraints, applications using this profile will need to assume default values of their own choosing. It is recommended to indicate these requirements in the profile to avoid misunderstandings about the nature of the metadata.

|propertyID|propertyLabel|mandatory|repeatable|
|----|----|----|----|
|dct:creator|Author|false|true|
|dct:date|Publication date|true|false|
|dct:extent|Pages|false|false

Other cardinality options such as "recommended" or "mandatory if applicable" may be included in the `notes` column. Alternately, a community may wish to express those by adding columns and elements to extend the TAP.

### Property value types

Each property in metadata has a value. These values can be undeclared and therefore not subject to validation, or they can be defined in the profile, which then makes it possible to check the metadata for conformance to the defined rules of the profile. The literal data type is given in `valueDataType` and in profiles defining RDF data the `valueNodeType` may be used.

Note that if value types are not included there is little validity checking that can be performed on the metadata.. 

**Element:** <code>valueDataType</code>

The value datatypes are literal datatypes, as defined in the XML schema datatypes specification ([XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](http://www.w3.org/TR/xmlschema11-2/)). The list of datatypes there called "primitive" cover many of the most common metadata datatypes, including:

 string · boolean · decimal · float · double · duration · dateTime · time · date · gYearMonth · gYear · gMonthDay · gDay · gMonth · anyURI
 
 These are usually preceded by a prefix (often "xsd:") which defines them as members of the XML schema vocabulary.
 
These datatypes are also valid for RDF nodes that are literals, as defined in RDF Concepts specification. ([RDF Concepts - Datatypes](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-Datatypes)) 

|propertyID|propertyLabel|valueDatatype
|----|----|----|----|
|dct:date|Publication date|xsd:date|
|dct:extent|Pages|xsd:decimal|

**Element:** <code>valueNodetype</code>

The value node type is the type of RDF node that is in the object position of the RDF triple. It can be IRI, blank node or literal. This element is generally used with the `valueDataType` when the `valueNodeType` is "literal".

|propertyID|propertyLabel|valueNodeType|valueDataType|
|----|----|----|----|
|dct:creator|Author|IRI|
|dct:date|Publication date|literal|xsd:date|
|dct:extent|Pages|literal|xsd:decimal|

## Note

***Element:*** <code>note</code>

In many cases it would be desirable to include some explanatory information for the users of the profile, such as a definition of the property or any other information, instructions, or constraints that need to be expressed.


|propertyID|propertyLabel|note|
|----|----|----|
|dct:creator|Author|Each author is given in a separate statement
|dct:title|Book title|The title and subtitle of the book|
|dct:publisher|Publisher|The name of the publisher or imprint from the title page|
|dct:date|Publication date|Publication date of books is generally a four-digit year|

## Shapes

Up to this point we have described an application profile that is a single list of properties and their constraints. A single list of metadata properties describes a single entity or thing. In practice, metadata often describes multiple things with relationships between them. A common example is bibliographic metadata which may separately describe books and authors, with the relationships between them. Another example is that of products, customers and invoices. Yet another defines the common entities in a learning environment: professors, students, courses. These are often expressed as rectangles in a data diagram: 

![](https://i.imgur.com/CYftbqf.jpg)

A group of properties that describe a named resource is called a *shape* in the TAP. A shape defines the structure that provides a view over a piece of data. 

### Shape identifier and shape label

***Element:*** <code>shapeID</code><br />
***Element:*** <code>shapeLabel</code>

In RDF instance data, each shape is anchored with a single subject node that is an IRI or blank node. In the profile, any unique value in the <code>shapeID</code> column in the profile can identify a shape. For readability and to aid in creating useful displays for metadata developers and users, each shape may also have an eye-readable label.

Because there is often more than one property for a shape, and because there must be a template row for each property, repeating the shape identifier and label in the profile is optional. It is assumed that all property rows following a row that includes a shape identifier are properties within that shape.

Using the diagram above, we can code each of the rectangles as a in our profile template. Here is the "tutors" shape:

|shapeID|shapeLabel|propertyID|propertyLabel|
|----|----|----|----|
|tutors|Tutor|foaf:mailbox|Email|
|||foaf:accountName|UserName|
|||sdo:accessCode|Password|
|||foaf:givenName|Firstname|
|||foaf:familyName|LastName|
|||sdo:gender|Gender|


Note that this table is equivalent to the one above although it repeats the `shapeID` and label on each row:

|shapeID|shapeLabel|propertyID|propertyLabel|
|----|----|----|----|
|tutors|Tutor|foaf:mailbox|Email|
|tutors|Tutor|foaf:accountName|UserName|
|tutors|Tutor|sdo:accessCode|Password|
|tutors|Tutor|foaf:givenName|Firstname|
|tutors|Tutor|foaf:familyName|LastName|
|tutors|Tutor|sdo:gender|Gender|

### Value shape

***Element:*** <code>valueShape</code>

The `valueShape` element is used to connect the shapes of a profile. The `valueShape` constrains a property value to the named shape and its properties. In the example above with tutors, students and courses, the course shape has a property <code>sdo:instructor</code> that has the `tutors` shape as a value.

|shapeID|shapeLabel|propertyID|propertyLabel|valueShape
|----|----|----|----|----|
|courses|Course|dct:title|Course name||
|||dct:description|Course description||
|||sdo:instructor|Tutor|tutors|
|tutors|Tutor|foaf:mailbox|Email||
|||foaf:accountName|UserName||

The string in the <code>valueShape</code> column must match exactly and uniquely the content of a shapeID. A row with a valueShape may also include cardinality constraints that define the requirements of the relationship between the "calling" and the "called" shapes.

|shapeID|shapeLabel|propertyID|propertyLabel|valueShape|mandatory|repeatable
|----|----|----|----|----|----|----|
|courses|Course|dct:title|Course name||true|false|
|||dct:description|Course description||true|false|
|||sdo:instructor|Tutor|tutors|true|false|
|tutors|Tutor|foaf:mailbox|Email||true|true|
|||foaf:accountName|UserName||true|false|

## Additional value constraints

### Value constraint

**Element:** <code>valueConstraint</code><br />

The `valueConstraint` further constrains the value that has been defined by the property, the valueNodeType and valueDataType. This must be a specific value such as a literal or an IRI, or a list of values.

| Property    | valueNodeType | valueDataType | valueConstraint                                   |
| ----------- | ------------- | ------------- | ------------------------------------------------- |
| rdf:type    | IRI           |               | sdo:ComicIssue                                    |
| dct:subject | IRI           |               | http://id.loc.gov/authorities/subjects/sh85141948 |
| dct:subject | LITERAL       | xsd:string    | Vampires                                          |

### Value constraint type

Because there can be different types of constraints it is necessary to provide a `valueConstraintType` that will allow the `valueConstraint` to be interpreted. The TAP iincludes a small set of pre-defined types that are commonly used, although it does not preclude the use of other types if needed. 

The pre-defined valueConstraintTypes are: `picklist`, `IRIstem`, `pattern` (regex), `languageTag`. 

* When the constraint is a list of string values (red, blue, green) the `valueConstraintType` is `picklist`. 
* When the value is to be chosen from one or more taxonomies or other online lists, the `valueConstraintType` is `IRIstem` and the `valueConstraint` gives the base IRI for the list
* `valueConstraints` can be expressed as patterns such as regular expressions, and the `valueConstraintType` is `pattern`
* One or more language tags that can be used with the property are given `valueConstraintType` `languageTag`.
* When the constraint is a single string value, no valueConstraintType is used. This latter indicates that the valueConstraint is treated as a single string regardless of possible delimiter characters (such as the comma) embedded within the string.

The `valueConstraintType` defines all values in the `valueConstraint` cell, whether a single value or a list. Multiple values in the valueConstraint cell are processed in a logical "or" relation. Thus the string:
`A, B, C`
is processed as 
`A`*or* `B` *or* `C` 

Examples of value constraints and their types are:

**Single string value**

| propertyID | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | History | |

The value of `dct:subject` will always be "History".

**List of string values**

| propertyID | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | History,Science,Art |picklist |

The value of `dct:subject` will be either "History" *or* "Science" *or* "Art".

**Constraint type defined in statement constraints**

| shapeID | propertyID | valueNodeType | valueConstraint |valueConstraintType |
| ---- | ---- | ---- | ---- | ---|
| author | rdf:type | IRI | foaf:Person | |

The `rdf:type` of the shape "author" is `foaf:Person`. No `valueConstraintType` is needed.

**One or more IRI stems**

| propertyID |  valueNodeType | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- | ---- |
| dct:subject | IRI |  | https://id.loc.gov/authorities/subjects/, http://vocab.getty.edu/ | IRIstem |

The value of `dct:subject` will be an identified term from either "https://id.loc.gov/authorities/subjects/" or  "http://vocab.getty.edu" lists, such as "https://id.loc.gov/authorities/subjects/sh85038796.html".

**pattern**

| propertyID |  valueNodeType | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- | ---- |
| schema:typicalAgeRange |  literal | xsd:string |  /^[0-9]{1,2}-?[0-9]{0,2}$/ | pattern |

The pattern given defines the rules for the string. Patterns can be used to define values such as upper and lower numbers, as this one does, date ranges, or other constraints on strings.

**language tags**

| propertyID | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | @en,@fr,@de  | languageTag |

When using the language tags with values, this constraint lists those tags that are permitted for the value, such as "Histoire"@fr used with RDF data in turtle format.

# Appendices

## Tables and the CSV format

The tabular application profile format will normally be viewed as a table or spreadsheet. For use in programs, the table is assumed to be stored as comma-delimited values, or CSV.  Many programming languages have functions to accept CSV as an input format. Here is an example of a small profile in both table and CSV formats:

**Table format**

|shapeID|shapeLabel|propertyID|propertyLabel|valueShape
|----|----|----|----|----|
|courses|Course|dct:title|Course name||
|||dct:description|Course description||
|||sdo:instructor|Tutor|tutors|
|tutors|Tutor|foaf:mailbox|Email||
|||foaf:accountName|User name||

**CSV format**

shapeID,shapeLabel,propertyID,propertyLabel,valueShape
courses,Course,dct:title,Course name,
,,dct:description,Course description,
,,sdo:instructor,Tutor,tutors
tutors,Tutor,foaf:mailbox,Email,
,,foaf:accountName,User name,

Note that CSV is not the only possible format; tables can often be saved in other tabular formats such as tab-delimited values. The TAP is designed to be compatible with the [CSV standard](https://tools.ietf.org/html/rfc4180) but is not limited to that. 

## Namespace declarations

When using IRIs as identifiers in the cells of a tabular profile it is common to shorten the IRI by providing a local name (a prefix) that represents the base of the identifier (a namespace), such that:

`dct:subject` = `http://purl.org/dc/terms/subject`
`foaf:name` = `http://xmlns.com/foaf/0.1/name`

Although there are some conventions of short names for frequently used vocabularies, it is always preferable to provide users of your data with your chosen practice so that expansion of the shortened IRIs will be correct. The actual format of the declaration of prefix and namespace varies by programming language although the basic content does not vary. A table could accompany the tabular profile with the basic information, and applications processing the profile could incorporate this information in the format they require. The proposed format for a table of prefixes and namespaces is:

| prefix | namespace |
| ---- | ----|
| foaf | http://xmlns.com/foaf/0.1/ |
| dct | http://purl.org/dc/terms/ |

Other methods may be used to convey this essential information in a way that is compatible with your expected programming environment.

For correct interpretation of the tabular profile it is recommended that this information be made available with the profile.
