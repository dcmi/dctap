# DCMI Application Profile

**Date:**
March 18, 2021

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
    + [Property note](#property-note)
    + [Property cardinality](#property-cardinality)
    + [Property value types](#property-value-types)
  * [Shapes](#shapes)
    + [Shape identifier & shape label](#shape-identifier-and-shape-label)
    + [Value shape](#value-shape)
  * [Value constraint](#value-constraint)
  * [Value constraint type](#value-constraint-type)
    + [Single string value](#single-string-value)
    + [List of string values](#list-of-string-values)
    + [Constraint type defined in statement constraints](#constraint-type-defined-in-statement-constraints)
    + [One or more IRI stems](#one-or-more-iri-stems)
    + [pattern](#pattern)
    + [language tags](#language-tags)
- [Appendices](#appendices)
  * [Explainer and constrainer](#explainer-and-constrainer)
  * [Tables and the CSV format](#tables-and-the-csv-format)
  * [Multiple options in a cell](#multiple-options-in-a-cell)
  * [Namespace declarations](#namespace-declarations)



# DCMI Specification for Tabular Application Profiles (TAP) Primer
## Profile overview

By its nature, the creation of a new metadata scheme from available open vocabularies creates what can be called an application profile, which in this document is often shortened to "profile.” Application profiles provide the rules that govern the creation and reuse of metadata. Their function is both to explain the metadata but also to potentially constrain the metadata so that correct usage can be determined. A single profile can serve a variety of needs: metadata creation support, metadata validation, metadata exchange, metadata selection, and mapping between metadata from different sources. Application profiles need to be sharable so that data exchange between communities of practice can take place. There is, however, no current standard for the creation of application profiles such that they could be understood outside of the community within which they have been developed.

A profile is created to define and constrain the property/value pairs that are used in metadata to describe resources. The DC TAP provides a vocabulary and format for creating profiles. The property/value pairs are statements about some thing that the metadata describes, and may be grouped into distinct graphs describing a particular resource. For example, in metadata that describes books and their authors, books and authors are both resources with their respective descriptive statements; in metadata for college courses there could be graphs for courses, professors, and students. A profile provides rules governing the creation and use of the metadata, listing properties, their cardinality, valid value types, and giving labels and notes to aid the reader of the profile.

Only the columns for profile elements that are needed must be included in the profile and only the propertyID is required. The order of the columns is not significant; they are identified by their column headers. 

One of the main goals of this work is to allow metadata developers to create very simple application profiles, with the possibility to expand the profile as needed to accommodate more detail. There is, however, a limit to what can be accomplished with this simple profile vocabulary and it is not intended to place any limitations on extension or reuse. 
## Properties
The simplest profile is a list of properties that will be considered valid in your metadata. A property must be one that has been defined previously in a vocabulary, preferably with an IRI to identify it. Examples of properties are http://purl.org/dc/terms/title and http://xmlns.com/foaf/spec/#term_familyName. Property IRIs are usually shortened using defined prefixes (see [Prefixes](#prefixes), below), such that these would be rendered as dct:title and foaf:familyName.

The properties are the only elements of the profile that are required. In essence, a profile is based on a list of properties that define the metadata that is being targeted by the profile.  A profile that defines only its propertyIDs has an assumed but undefined RDF node as its subject and an assumed but undefined RDF node type as its object.

### Property identifier
***Element:*** <code>propertyID</code> 

The property ID must be the identifier of a vocabulary term that is defined elsewhere. It is mandatory.

**In table format:**
|propertyID|
|----|
|https://schema.org/creator
|http://purl.org/dc/terms/title
|http://purl.org/dc/terms/date

Note that for property identifiers and for other uses of URIs for values in the table, it is commonplace to shorten these using a prefix or CURIE method. This is covered in more detail in the [Namespace Declarations](#namespace-declarations) section in the appendix. In the remainder of this document we will use shortened forms, such as "dct:title" or "foaf:name". 

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


### Note

***Element:*** <code>note</code>

In many cases it would be desirable to include some explanatory information for the users of the profile, such as a definition of the property or any other information, instructions, or constraints that are need to be expressed.


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

Non-binary cardinality options such as "recommended" or "mandatory if applicable" may be included in the `notes` column.

**Table format:**

|propertyID|propertyLabel|mandatory|repeatable|
|----|----|----|----|
|dct:creator|Author|false|true|
|dct:date|Publication date|true|false|
|dct:extent|Pages|false|false


### Property value types

In the metadata instance data, each property has a value. These values can be undeclared and therefore not subject to validation, or they can be defined in the profile, which then makes possible checking of the metadata value instances for validity. 

For RDF data there are two inter-related value types: the type of the RDF object node (IRI, blank node, or literal) and, if a literal value, the more specific type of the literal value. Both of these are optional elements of the profile. However, if they are not included, applications that process the instance data may assume defaults. 

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

A group of properties that describe a single resource is called a *shape* in the TAP. A shape defines the structure that applications can expect to find in a view over a piece of data. In the application profile, instance data property graphs are gathered in shapes that have a common subject focus. 

### Shape identifier and shape label

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

The value of a property can be constrained by a shape. In the example above with tutors, students and courses, the course shape has a property <code>sdo:instructor</code> that has the tutor shape as a value.

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

## Value constraint type

To allow for a wider range of value constraints beyond specific values, it will be necessary to give a value constraint type that will allow the value constraint to be interpreted. 

Values in valueConstraint can be single values or a list of delimited values. 
The pre-defined valueConstraintTypes: picklist, IRIstem, pattern (regex), languageTag. Other types of valueConstraintTypes are allowed, including code snippets (e.g. ShEx statements). When using a valueConstraintType that is not one of the pre-defined types it may be necessary to convey the meaning of the type to downstream users of the profile.
When the constraint is a list of string values (red, blue, green) the valueConstraintType is `picklist`. 
When the constraint is a single string value, no valueConstraintType is used. This latter indicates that the valueConstraint is treated as a single string regardless of possible delimiter characters (such as the comma) embedded within the string.

The valueConstraintType defines all values in the valueConstraint cell, whether a single value or a list. Multiple values in the valueConstraint cell are processed in a logical "or" relation. Thus the string:
`A, B, C`
is processed as 
`A` or `B` or `C` 

### Single string value

| propertyID | valueDatatype | valueConstraint | valueConstraintType |
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | Smith, Jane | |

### List of string values

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

### pattern

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
