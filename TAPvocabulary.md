# DCMI Application Profile Vocabulary

**Date:**
November 27, 2020

**Status:**
Draft - Request for Comments

**Editors:**
Karen Coyle

**Contributors**
Tom Baker, DCMI
Phil Barker
John Huck, University of Alberta
Ben Reisenberg, University of Washington

## Introduction

This vocabulary defines the elements of an application profile. The purpose of a profile is to define and constrain the property/value pairs in metadata instances. These pairs are statements about some thing that the metadata describes, and may be grouped into distinct graphs called shapes. The profile provides rules governing the creation and use of the metadata, listing properties, their cardinality, valid value types, and giving labels and notes to aid the reader of the profile.


## Vocabulary elements

| | |element | datatype |
|---|---|--- | ---- |
| Profile= | zero or more | Shape |
| | one or more | statement constraint
| |  |  |  |
| Shape= | one | shapeID | IRI or LITERAL
| | zero or one | shapeLabel | LITERAL
| | one or more | Statement constraint |
| |  |  |  |
| Statement constraint= | one | propertyID | IRI
| | zero or one | propertyLabel | LITERAL
| | zero or one | mandatory | BOOLEAN
| | zero or one | repeatable | BOOLEAN
| | zero or one | valueNodeType | "IRI" or "LITERAL" or "BNODE"
| | zero or one | valueDataType | IRI 
| | zero or one | valueConstraint | LITERAL
| | zero or one | valueConstraintType | LITERAL
| | zero or one | note | LITERAL


## Definitions

### Profile

An application profile specifies the structures and metadata terms used in a dataset. At a minimum the profile must provide the data elements that make up the metadata definition; a profile may also include rules for validity, such as value constraints and element cardinality. 

### Shape

A group of statement constraints that share a subject node and are identified with the same shapeID. 

### shapeID

A literal or IRI that uniquely identifies the shape within the context of the profile.

**Examples**: Book; ex:person

### shapeLabel
A brief human-readable label for the shape.

### Statement constraint

A statement constraint consists of a property and any rules that constrain the property and its value. 

### propertyID

The IRI of a vocabulary term defined in an RDF-compatible vocabulary.

### propertyLabel

A brief human-readable label for the property.

### mandatory

Indicates whether or not the property must be present in the instance data. This is a Boolean value: "true" or "false", or "1" or "0".

### repeatable

Indicates whether or not the property can be repeated in the instance data. This is a Boolean value: "true" or "false", or "1" or "0".

### valueNodeType

The RDF node type of the value node. One of: "IRI", "LITERAL", "BNODE".

### valueDataType

This is for values with an RDF node type of "LITERAL". Where the instance metadata must be valid RDF literal value, as defined in ([RDF Concepts - Datatypes](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-Datatypes)). The majority of these datatypes are defined in the XML schema datatypes specification ([XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](http://www.w3.org/TR/xmlschema11-2/)).

### valueShape

The value of a property can be a shapeID matching a shapeID in the same profile.

### note

Any additional or explanatory information related to the statement or any part of the statement, generally in natural language.

### valueConstraint

This further constrains the value that has been defined by the property, the valueNodeType and valueDataType. Where the property value takes is a single literal string instance or IRI, that value is carried in the valueConstraint cell. 

*Additional rules deferred*

Additional rules for values that are not simple strings have not yet been defined by the working group. These may include pick lists of terms ("red" "blue" "yellow"), IRI stems for selections from identified term lists or thesauri ("https://id.loc.gov"), statements of minimal or maximum numeric values ("age < 21" "date > 2019"), or any other actionable validation statement including regular expressions. These require the definition of a value constraint type.

### valueConstraintType

*Specification deferred*

Because all cells in the CSV tabular form are strings, value constraints will not be actionable unless they are defined by type. The working group is considering types like sx:URIstem, regEx (what flavor?), pick list, etc., but the potential range of possibilities is large, therefore this is yet unspecified.


