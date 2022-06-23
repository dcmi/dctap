# DC Tabular Application Profiles Vocabulary

**Date:**
April 9, 2021

**Status:**
Draft - Request for Comments

**Editors:**
Karen Coyle

**Contributors**

Tom Baker, DCMI

Phil Barker, Cetis LLP

John Huck, University of Alberta

Ben Reisenberg, University of Washington

Nishad Thalhath, University of Tsukuba

## Introduction

This vocabulary supports the specification of [Dublin Core Tabular Application Profiles](https://github.com/dcmi/dctap/blob/main/TAPprimer.md) (DC TAP). The vocabulary may be used to create a table or spreadsheet that defines the elements of an application profile. The vocabulary is also provided as a [comma separated value template](https://github.com/dcmi/dctap/blob/main/TAPtemplate.csv) for use in a tabular form.

An application profile comprises a set of templates for metadata statements in the instance data. The templates define and describe local choices for how statements are constructed, which may include constraints and explanatory information such as labels and notes. A set of statement templates that applies to a single entity or concept defines a shape. 


## Vocabulary elements

| structure | cardinality |property | datatype |
|---|---|--- | ---- |
| profile= | zero or more | shape |
| | one or more | statement template
| |  |  |  |
| shape= | one | shapeID | IRI or LITERAL
| | zero or one | shapeLabel | LITERAL
| | one or more | statement template |
| |  |  |  |
| statement template= | one | propertyID | IRI
| | zero or one | propertyLabel | LITERAL
| | zero or one | mandatory | BOOLEAN
| | zero or one | repeatable | BOOLEAN
| | zero or one | valueNodeType | LITERAL
| | zero or one | valueDataType | IRI 
| | zero or one | valueShape | LITERAL
| | zero or one | valueConstraint | LITERAL
| | zero or one | valueConstraintType | LITERAL
| | zero or one | note | LITERAL


## Definitions

### Profile

Using terms from existing vocabularies, an application profile specifies the structures and metadata terms used in a dataset. At a minimum the profile must provide the data elements, or properties, that are valid for use in the metadata. A profile may also further define metadata validity, such as value constraints and cardinality of elements. 

### Shape

A shape is a group of statement templates that share a subject and are identified with the same shapeID. 

### shapeID

A literal or IRI that uniquely identifies the shape within the context of the profile.

### shapeLabel

A human-readable label for the shape.

### Statement template

A statement template consists of a property, rules that constrain the property and its value, labels, and notes. 

### propertyID

The IRI of a vocabulary term defined in an RDF-compatible vocabulary.

### propertyLabel

A human-readable label for the property.

### mandatory

Indicates whether or not the metadata must contain a statement that is consistent with this statement template. This is a Boolean value: "true" or "false", or "1" or "0".

### repeatable

Indicates whether or not the metadata may contain multiple instances of statements that are consistent with this statement template. This is a Boolean value: "true" or "false", or "1" or "0".

### valueNodeType

The RDF node type of the value node. Built-in values are: "IRI", "literal", "bnode".

### valueDataType
The data type of the value. This should be expressed with a standard identified type such as those defined in the XML schema datatypes specification ([XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](http://www.w3.org/TR/xmlschema11-2/)). Where the value must be a valid RDF literal value, use those defined in ([RDF Concepts - Datatypes](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-Datatypes)).

### valueShape

The valueShape of a property is a string matching a shapeID in the same profile. The string may be in the form of an IRI.

### valueConstraint

The valueConstraint gives rules relating to the value beyond that which has been defined by the property, the valueNodeType and valueDataType.

### valueConstraintType

Value constraints may not be actionable unless the type of constraint is defined. The built-in types are: picklist, IRIstem, pattern, languageTag. These are defined in the [DC TAP primer](https://github.com/dcmi/dctap/blob/main/TAPprimer.md#value-constraint-type). Other types may be supplied in the TAP.

### note

Any explanatory information related to the statement or any part of the statement, generally in natural language.
