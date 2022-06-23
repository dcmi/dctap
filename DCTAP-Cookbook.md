# DC TAP Cookbook

**NB: This is a work in progress! The document draft can be found at https://hackmd.io/V3LGdBdxTrOid57M2wJUlw. This version is dated June 21, 2022.**

The Dublin Core Tabular Application Profile has been designed purposely as a simple core of application profile requirements. Like the Dublin Core Metadata Terms, the DC TAP should be seen as a starting point that may be sufficient for some simple applications but may also need to be extended to meet the needs of others. There are no intended limitations in the DC TAP design that would hinder extension.  

This document presents some examples of extensions that may help users of DC TAP create their own extensions. Sections of this document and the solutions provided may change as we learn more about uses of the DC TAP.

## Extension points

There are two primary types of extensions for the DC TAP. The first is to add columns in the table for elements that are not included in the base specification. An example could be for a profile that will specify a maximum length for some data elements. The second is to add capabilities to the values that are defined for the cells of the basic table. This could mean defining ones own `valueConstraintType` or allowing multiple values in some cells in the table.

## Extending elements

### Minimum/maximum cardinality
(Issue #50)

The DC TAP has two cardinality columns that take only the boolean values of "true" or "false" (or "1" or "0" ): `mandatory`, and `repeatable`. These do not allow you to encode requirements like: "there must be two of these" or "there can be only 5". These types of requirements are written as numeric values, such as "2,5". Because this form of cardinality declaration is not including in the DC TAP it will require the addition of the desired number of extended columns to hold the information. 

For those who prefer to store these elements as two separate elements, two extended columns will be needed. For those who prefer a compact version with both minimum and maximum in a single expression, only one added column will be needed. In either case, as these are undefined in the base specification, the heading of these extended columns is not pre-defined. The examples below use headings that are solely suggestive of the functions.

Note that the use of minimum and maximum cardinality is in most cases not compatible with the use of `mandatory` and `repeatable`. Only one of these ways of expressing cardinality should be used in a TAP.

(examples here)

*Do we need to add the extensions of minInclusive, minExclusive, maxInclusive, maxExclusive? See [this](https://github.com/dcmi/dctap/issues/50#issuecomment-919933832) and [this](https://github.com/dcmi/dctap/issues/50#issuecomment-921656021).*

## Minimum/maximum values

(#57)

The DC TAP `valueDataType` can be a numeric value such as an integer or a formatted date. It is not uncommon for values such as these to be limited in their lower and/or upper bounds. In a profile for metadata that describes an educational program, there can be an obvious limitation on the ages of the pupils. The rule would be, for example, that students in any class may not be younger than 6 years of age, or older than 18 years of age.  Or an inventory system for a business may put limits on a data element for "date of sale" to catch typos.

Either of these value constraints may be used alone if only a lower or upper bound is needed.

*This needs a regex as an example.*

(examples)

(Note: there's the problem of "if" - "if class is primary, then age range is 6-12; if class if middle, then age range is 11-15" etc. The table format doesn't give you a way to create branches based on "if" operations.)

## Namespace declarations

When using IRIs as identifiers in the cells of a tabular profile it is common to shorten the IRI by providing a local name (a prefix) that represents the base of the identifier (a namespace), such that:

`dct:subject` = `http://purl.org/dc/terms/subject`<br />
`foaf:name` = `http://xmlns.com/foaf/0.1/name`<br />

Although there are some conventions of short names for frequently used vocabularies, it is always preferable to provide users of your data with your chosen practice so that expansion of the shortened IRIs will be correct. The actual format of the declaration of prefix and namespace varies by programming language although the basic content does not vary. A table could accompany the tabular profile with the basic information, and applications processing the profile could incorporate this information in the format they require. The proposed format for a table of prefixes and namespaces is:

| prefix | namespace |
| ---- | ---- |
| foaf: | http://xmlns.com/foaf/0.1/ |
| dct: | http://purl.org/dc/terms/ |

Other methods may be used to convey this essential information in a way that is compatible with your expected programming environment.

For correct interpretation of the tabular profile it is recommended that this information be made available with the profile.

## Multiple values in a cell

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

| propertyID | valueDatatype | valueConstraint | valueConstraintType
| ---- | ---- | ---- | ---- |
| dct:subject | xsd:string | European History&#124;Science&#124;Fine Arts | picklist

| propertyID | valueDatatype | valueConstraint | valueConstraintType
| ---- | ---- | ---- | ----|
| dct:subject | xsd:string | European History, Science, Fine Arts | picklist

Not all columns can work well with multiple values. For example, one cannot have multiple values for the boolean elements of mandatory and repeatable. Likely uses of multiple values are: for labels (especially those using language tags to differentiate them); valueShape; valueConstraint; and valueDataType. Note that where multiple values are used one must be careful that this has not created ambiguity. For example, where there are multiple data types it may not be possible to also include a valueConstraint that would apply to only one of the multiple values.

## Defining order of properties

It may be desirable to define an order of properties in the metadata. A CSV file is itself in a fixed order, but if this order is not sufficient then a column for the enumeration of the order could be added to the tabular profile. ([Issue #15](https://github.com/dcmi/dctap/issues/15)) This only is workable within a single shape. Ordering across shapes isn't possible. 

Here is an example of this from BIBFRAME:

|shapeID|shapeLabel|propertyID|propertyLabel|orderNo
|----|----|----|----|----|
|ISBN|ISBN|rdf:type|Class|1
|||sp:hasResourceTemplate|Profile ID|2
|||rdf:value|ISBN|3
|||bf:qualifier|Qualifier|4
|||bf:note|Note|5
|||bf:/status|Incorrect, Invalid or Canceled?|6

For validation, order of properties can be checked with both ShEx and SHACL for RDF data. Here is an example from the SHACL documentation.

![](https://i.imgur.com/LY5Pu11.png)


## Define ordered values

Without some extra effort, statements in RDF are not ordered. Where a metadata statement is repeatable but order of the statements is meaningful, it may be desirable to indicate in the profile which properties must be created and maintained in order. Depending on the needs of the applications, this can be done as:
* logic within the application, where order is always enforced for a specific property
* a note, where the main purpose is to inform those creating the metadata
* an added column for `ordered` with a binary value, where this needs to be conveyed to any downstream applications


